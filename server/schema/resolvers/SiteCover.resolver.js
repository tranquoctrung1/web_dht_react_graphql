const SiteCoverModel = require('../../models/SiteCover.model');

module.exports = {
    Query: {
        GetAllSiteCover: async (parent, {}, context, info) => {
            return await SiteCoverModel.GetAll();
        },
        GetAllCoverL: async (parent, {}, context, info) => {
            return await SiteCoverModel.GetAllCoverL();
        },
        GetAllCoverW: async (parent, {}, context, info) => {
            return await SiteCoverModel.GetAllCoverW();
        },
        GetAllCoverH: async (parent, {}, context, info) => {
            return await SiteCoverModel.GetAllCoverH();
        },
        GetAllCorverMeterial: async (parent, {}, context, info) => {
            return await SiteCoverModel.GetAllCorverMeterial();
        },
        GetAllCoverNL: async (parent, {}, context, info) => {
            return await SiteCoverModel.GetAllCoverNL();
        },
    },
    Mutation: {
        InsertCover: async (parent, { cover }, context, info) => {
            return await SiteCoverModel.Insert(cover);
        },
        UpdateCover: async (parent, { cover }, context, info) => {
            return await SiteCoverModel.Update(cover);
        },
        DeleteCover: async (parent, { cover }, context, info) => {
            return await SiteCoverModel.Delete(cover);
        },
    },
};
