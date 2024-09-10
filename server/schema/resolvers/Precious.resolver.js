const PreciousModel = require('../../models/Precious.model');
const SiteModel = require('../../models/SiteSite.model');

module.exports = {
    Query: {
        GetAllPrecious: async (parent, {}, context, info) => {
            return await PreciousModel.GetAllPrecious();
        },
        GetPreciousByCompany: async (parent, { company }, context, info) => {
            return await PreciousModel.GetPreciousByCompany(company);
        },
        GetIndexPreciousByCompany: async (
            parent,
            { company, start, end },
            context,
            info,
        ) => {
            const result = [];

            const precious = await PreciousModel.GetPreciousByTimeStamp(
                start,
                end,
            );
            const sites = await SiteModel.GetSiteIstOrQndByCompany(company);

            if (sites.length > 0 && precious.length > 0) {
                for (const p of precious) {
                    if (p.Company !== company) {
                        if (p.Index.length > 0) {
                            for (const index of p.Index) {
                                const find = sites.find(
                                    (el) => el._id === index.SiteId,
                                );
                                if (find !== undefined) {
                                    const exists = result.find(
                                        (el) => el.SiteId === find._id,
                                    );
                                    if (exists === undefined) {
                                        result.push(index);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            return result;
        },
    },

    Mutation: {
        InsertPrecious: async (parent, { precious }, context, info) => {
            return await PreciousModel.Insert(precious);
        },
        UpdatePrecious: async (parent, { precious }, context, info) => {
            return await PreciousModel.Update(precious);
        },
        DeletePrecious: async (parent, { precious }, context, info) => {
            return await PreciousModel.Delete(precious);
        },
    },
};
