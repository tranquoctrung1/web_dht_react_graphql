const jwt = require('jsonwebtoken');
const UserUserModel = require('../../models/UserUser.model');
const UserStaffModel = require('../../models/UserStaff.model');

const ADMIN_ROLE = 'admin';

const decodeToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_KEY);
    } catch (err) {
        return null;
    }
};

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
        ResetAllLoginCount: async (parent, {}, context, info) => {
            const decoded = decodeToken(context.token);

            if (decoded === null || decoded.role !== ADMIN_ROLE) {
                return 0;
            }

            return await UserUserModel.ResetAllLogCount();
        },
        ResetLoginCount: async (parent, { Uid }, context, info) => {
            const decoded = decodeToken(context.token);

            if (decoded === null || decoded.role !== ADMIN_ROLE) {
                return 0;
            }

            if (Uid === null || Uid === undefined || Uid === '') {
                return 0;
            }

            return await UserUserModel.ResetLogCount(Uid);
        },
    },
};
