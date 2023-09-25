const UserUserModel = require('../../models/UserUser.model');

module.exports = {
    Query: {
        GetAllUser: async (parent, {}, context, info) => {
            return await UserUserModel.GetAll();
        },
        VerifyPassword: async (parent, { Uid, Pwd }, context, info) => {
            return await UserUserModel.VerifyPassword(Uid, Pwd);
        },
    },

    Mutation: {
        InsertUser: async (parent, { user }, context, info) => {
            try {
                return await UserUserModel.Insert(user);
            } catch (err) {
                console.log(err);
            }
        },
        UpdateUser: async (parent, { user }, context, info) => {
            return await UserUserModel.Update(user);
        },
        DeleteUser: async (parent, { user }, context, info) => {
            return await UserUserModel.Delete(user);
        },
        UpdatePassword: async (parent, { user }, context, info) => {
            return await UserUserModel.UpdatePassword(user);
        },
    },
};
