const jwt = require('jsonwebtoken');
const DeviceTransmitterModel = require('../../models/DeviceTransmitter.model');

const ADMIN_ROLE = 'admin';

const decodeToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_KEY);
    } catch (err) {
        return null;
    }
};

module.exports = {
    Query: {
        GetAllTransmitterNotInstall: async (parent, {}, context, info) => {
            return await DeviceTransmitterModel.GetAllTransmitterNotInstall();
        },

        GetAllTransmitter: async (parent, {}, context, info) => {
            return await DeviceTransmitterModel.GetAll();
        },
        GetTransmitterProvider: async (parent, {}, context, info) => {
            return await DeviceTransmitterModel.GetAllProvider();
        },
        GetTransmitterModel: async (parent, {}, context, info) => {
            return await DeviceTransmitterModel.GetAllModel();
        },
        GetTransmitterMarks: async (parent, {}, context, info) => {
            return await DeviceTransmitterModel.GetAllMarks();
        },
        GetTransmitterSize: async (parent, {}, context, info) => {
            return await DeviceTransmitterModel.GetAllSize();
        },
    },
    Mutation: {
        InsertTransmitter: async (parent, { transmitter }, context, info) => {
            return await DeviceTransmitterModel.Insert(transmitter);
        },
        UpdateTransmitter: async (parent, { transmitter }, context, info) => {
            return await DeviceTransmitterModel.Update(transmitter);
        },
        DeleteTransmitter: async (parent, { transmitter }, context, info) => {
            const decoded = decodeToken(context.token);

            if (decoded === null || decoded.role !== ADMIN_ROLE) {
                return 0;
            }

            return await DeviceTransmitterModel.Delete(transmitter);
        },
    },
};
