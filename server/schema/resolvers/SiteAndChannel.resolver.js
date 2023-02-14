const SiteModel = require('../../models/SiteSite.model');

module.exports = {
    Query: {
        GetAllSiteAndChannel: async () => {
            let result = [];

            let sites = await SiteModel.GetAllSites();

            if (sites.length > 0) {
                for (let site of sites) {
                    let obj = {};
                    obj._id = site._id;
                    obj.OldId = site.OldId;
                    obj.Location = site.Location;
                    obj.Latitude = site.Latitude;
                    obj.Longitude = site.Longitude;
                    obj.Level = site.Level;
                    obj.Company = site.Company;
                    obj.Description = site.Description;
                    obj.Group2 = site.Group2;
                    obj.Group3 = site.Group3;
                    obj.Group4 = site.Group4;
                    obj.Group5 = site.Group5;
                    obj.Address = site.Address;
                    obj.District = site.District;
                    obj.IsErrorBattery = site.IsErrorBattery;

                    result.push(obj);
                }
            }

            return result;
        },
    },
};
