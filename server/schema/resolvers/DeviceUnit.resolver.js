const DeviceUnitModel = require('../../models/DeviceUnit.model');

module.exports = {
    Query: {
        GetAllUnit: async (parent, {}, context, info) => {
            return await DeviceUnitModel.GetAll();
        },
    },
};
