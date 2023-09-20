const UserRoleModel = require('../../models/UserRole.model');

module.exports = {
    Query: {
        GetAllRole: async (parent, {}, context, info) => {
            return await UserRoleModel.GetAll();
        },
    },
};
