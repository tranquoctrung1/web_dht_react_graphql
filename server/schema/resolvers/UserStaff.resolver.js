const UserStaffModel = require('../../models/UserStaff.model');

module.exports = {
    Query: {
        GetAllStaffs: async (parent, {}, context, info) => {
            return await UserStaffModel.GetAllStaffs();
        },
    },
};
