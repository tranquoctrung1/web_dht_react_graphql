const DeviceMeterAccreditationTypeModel = require('../../models/DeviceMeterAccreditationType.model');

module.exports = {
    Query: {
        GetAllMeterAccreditationType: async (parent, {}, context, info) => {
            return await DeviceMeterAccreditationTypeModel.GetAll();
        },
    },
    Mutation: {
        InsertMeterAccreditation: async (parent, { type }, context, info) => {
            return await DeviceMeterAccreditationTypeModel.Insert(type);
        },
        UpdateMeterAccreditation: async (parent, { type }, context, info) => {
            return await DeviceMeterAccreditationTypeModel.Update(type);
        },
        DeleteMeterAccreditation: async (parent, { type }, context, info) => {
            return await DeviceMeterAccreditationTypeModel.Delete(type);
        },
    },
};
