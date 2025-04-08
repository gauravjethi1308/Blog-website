const jwt = require("jsonwebtoken");
const secret = "$lilgolu";

function createTokenforuser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    profileimgurl: user.profileimgurl,
    role: user.role,
  };

  const token = jwt.sign(payload, secret);
  return token;
}

function validateToken(token) {
  const payload = jwt.verify(token, secret);
  return payload;
}

module.exports = {
  createTokenforuser,
  validateToken,
};
