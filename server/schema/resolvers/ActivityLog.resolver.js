const jwt = require('jsonwebtoken');
const ActivityLogModel = require('../../models/ActivityLog.model');

const ADMIN_ROLE = 'admin';
const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 500;

const decodeToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_KEY);
    } catch (err) {
        return null;
    }
};

module.exports = {
    Query: {
        ActivityLogs: async (parent, args, context, info) => {
            const decoded = decodeToken(context.token);

            if (decoded === null || decoded.role !== ADMIN_ROLE) {
                return { items: [], total: 0 };
            }

            let limit =
                args.limit !== undefined && args.limit !== null
                    ? args.limit
                    : DEFAULT_LIMIT;

            if (limit > MAX_LIMIT) {
                limit = MAX_LIMIT;
            }

            const filter = {
                Uid: args.Uid,
                Action: args.Action,
                Page: args.Page,
                dateFrom: args.dateFrom,
                dateTo: args.dateTo,
                skip: args.skip,
                limit: limit,
            };

            const items = await ActivityLogModel.Find(filter);
            const total = await ActivityLogModel.Count(filter);

            return { items, total };
        },
    },
    Mutation: {
        CreateActivityLog: async (parent, args, context, info) => {
            const decoded = decodeToken(context.token);

            if (decoded === null) {
                return 'unauthorized';
            }

            const log = {
                Uid: decoded.username,
                Role: decoded.role,
                Action: args.Action,
                Page: args.Page,
                Target: args.Target,
                Detail: args.Detail,
                CreatedAt: new Date(),
            };

            await ActivityLogModel.Insert(log);

            return 'ok';
        },
    },
};
