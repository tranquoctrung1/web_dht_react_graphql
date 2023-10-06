const UserUserModel = require('../../models/UserUser.model');
const UserStaffModel = require('../../models/UserStaff.model');

module.exports = {
    Query: {
        GetAllUser: async (parent, {}, context, info) => {
            return await UserUserModel.GetAll();
        },
        VerifyPassword: async (parent, { Uid, Pwd }, context, info) => {
            return await UserUserModel.VerifyPassword(Uid, Pwd);
        },
        GetAllUserAndStaff: async (parent, {}, context, info) => {
            const result = [];

            const listUser = await UserUserModel.GetAll();

            const listStaff = await UserStaffModel.GetAllStaffs();

            for (const user of listUser) {
                const obj = {
                    ...user,
                };
                const find = listStaff.find((el) => el._id === user.StaffId);

                if (find !== undefined) {
                    obj.FirstName = find.FirstName;
                    obj.LastName = find.LastName;
                }

                result.push(obj);
            }

            return result;
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
        UpdateActiveUser: async (parent, { user }, context, info) => {
            return await UserUserModel.UpdateActiveUser(user);
        },
    },
};
