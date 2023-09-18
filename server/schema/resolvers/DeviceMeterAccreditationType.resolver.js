const DeviceMeterAccreditationTypeModel = require('../../models/DeviceMeterAccreditationType.model');

module.exports = {
    Query: {
        GetAllMeterAccreditationType: async (parent, {}, context, info) => {
            return await DeviceMeterAccreditationTypeModel.GetAll();
        },
    },
};
