const jwt = require("jsonwebtoken");
const config = require("../config/config");

const create_webtoken = (id, username) => {
    return jwt.sign({ id:id, user:username }, config.jwt_key, { expiresIn: config.jwt_expires });
}

module.exports = create_webtoken;