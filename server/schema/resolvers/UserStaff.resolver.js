const UserStaffModel = require('../../models/UserStaff.model');

module.exports = {
    Query: {
        GetAllStaffs: async (parent, {}, context, info) => {
            return await UserStaffModel.GetAllStaffs();
        },
    },
    Mutation: {
        InsertUserStaff: async (parent, { staff }, context, info) => {
            return await UserStaffModel.Insert(staff);
        },
        UpdateUserStaff: async (parent, { staff }, context, info) => {
            return await UserStaffModel.Update(staff);
        },
        DeleteUserStaff: async (parent, { staff }, context, info) => {
            return await UserStaffModel.Delete(staff);
        },
    },
};
