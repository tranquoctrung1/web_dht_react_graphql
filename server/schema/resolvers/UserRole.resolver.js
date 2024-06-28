const UserRoleModel = require('../../models/UserRole.model');

module.exports = {
    Query: {
        GetAllRole: async (parent, {}, context, info) => {
            return await UserRoleModel.GetAll();
        },
    },
    Mutation: {
        InsertUserRole: async (parent, { role }, context, info) => {
            return await UserRoleModel.Insert(role);
        },
        UpdateUserRole: async (parent, { role }, context, info) => {
            return await UserRoleModel.Update(role);
        },
        DeleteUserRole: async (parent, { role }, context, info) => {
            return await UserRoleModel.Delete(role);
        },
    },
};
