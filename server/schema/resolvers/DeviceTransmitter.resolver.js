const DeviceTransmitterModel = require('../../models/DeviceTransmitter.model');

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
            return await DeviceTransmitterModel.Delete(transmitter);
        },
    },
};
