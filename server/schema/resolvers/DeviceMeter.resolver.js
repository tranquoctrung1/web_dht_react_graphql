const DeviceMeterModel = require('../../models/DeviceMeter.model');

module.exports = {
    Query: {
        GetAllMeterNotInstall: async (parent, {}, context, info) => {
            return await DeviceMeterModel.GetAllMeterNotInstall();
        },

        GetAllMeter: async (parent, {}, context, info) => {
            return await DeviceMeterModel.GetAll();
        },
        GetMeterNationalities: async (parent, {}, context, info) => {
            return await DeviceMeterModel.GetAllNationalities();
        },
        GetMeterProvider: async (parent, {}, context, info) => {
            return await DeviceMeterModel.GetAllProvider();
        },
        GetMeterModel: async (parent, {}, context, info) => {
            return await DeviceMeterModel.GetAllModel();
        },
        GetMeterMarks: async (parent, {}, context, info) => {
            return await DeviceMeterModel.GetAllMarks();
        },
        GetMeterSize: async (parent, {}, context, info) => {
            return await DeviceMeterModel.GetAllSize();
        },
    },
    Mutation: {
        InsertMeter: async (parent, { meter }, context, info) => {
            return await DeviceMeterModel.Insert(meter);
        },
        UpdateMeter: async (parent, { meter }, context, info) => {
            return await DeviceMeterModel.Update(meter);
        },
        DeleteMeter: async (parent, { meter }, context, info) => {
            return await DeviceMeterModel.Delete(meter);
        },
        UpdateMeterInstall: async (parent, { meter }, context, info) => {
            return await DeviceMeterModel.UpdateInstall(meter);
        },
    },
};
