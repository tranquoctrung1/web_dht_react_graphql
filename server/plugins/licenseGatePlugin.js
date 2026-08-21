const { GraphQLError } = require('graphql');

const gateCheck = require('../services/license/gateCheck');

// Port of nodejs_scada_web_dht/middleware/licenseGate.js for a GraphQL API:
// that project gated whole HTTP routes ("/license/*" always passes through,
// everything else redirects to /license/activate when unlicensed). Here every
// request hits the same POST / endpoint, so the equivalent gate is per
// operation name — block every GraphQL operation except the license ones
// (and introspection, needed by graphql-codegen) when the license is invalid.
const ALLOWED_OPERATIONS = new Set([
    'GetLicenseInfo',
    'ActivateLicense',
    'CheckLicenseGate',
]);

// Introspection (graphql-codegen, GraphiQL) is always a pure __schema/__type
// query with no other selections — allow it without naming it explicitly,
// since tooling frequently sends it unnamed.
function isIntrospectionOnly(document) {
    const opDef = document.definitions.find(
        (d) => d.kind === 'OperationDefinition',
    );

    if (!opDef) {
        return false;
    }

    return opDef.selectionSet.selections.every(
        (sel) =>
            sel.kind === 'Field' &&
            (sel.name.value === '__schema' || sel.name.value === '__type'),
    );
}

module.exports.licenseGatePlugin = {
    async requestDidStart() {
        return {
            async didResolveOperation(requestContext) {
                const opName = requestContext.operationName;

                if (opName && ALLOWED_OPERATIONS.has(opName)) {
                    return;
                }

                if (isIntrospectionOnly(requestContext.document)) {
                    return;
                }

                const gate = await gateCheck.checkGate();

                if (!gate.allowed) {
                    throw new GraphQLError('License required', {
                        extensions: {
                            code: 'LICENSE_REQUIRED',
                            reason: gate.reason,
                        },
                    });
                }
            },
        };
    },
};
