const UserUserModel = require('../../models/UserUser.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    Query: {
        LoginAction: async (parent, { username, password }, context, info) => {
            let result = {
                token: '',
                Uid: '',
                Role: '',
                Company: '',
            };

            const user = await UserUserModel.GetUserByUId(username);

            if (user.length > 0) {
                let dbPassword = user[0].Pwd;
                if (bcrypt.compareSync(password, dbPassword)) {
                    let token = jwt.sign(
                        {
                            username: user[0].Uid,
                            role: user[0].Role,
                        },
                        process.env.JWT_KEY,
                        //{ expiresIn: "1h" }
                    );

                    result.token = token;
                    result.Uid = user[0].Uid;
                    result.Role = user[0].Role;
                    result.Company = user[0].Company;

                    if (user.LogCount !== null && user.LogCount !== undefined) {
                        user.LogCount = user.LogCount + 1;

                        await UserUserModel.UpdateLoginCountUser(user);
                    }

                    user.Active = true;

                    await UserUserModel.UpdateActiveUser(user);
                }
            }

            return result;
        },
    },
};
