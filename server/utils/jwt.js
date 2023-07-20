const jwt = require('jwt-simple');

module.exports.tokenForUser = function (user) {
  const timestamp = new Date().getTime();

  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.TOKEN_SECRET);
};
