const User = require('../models/user.model');
const tokenForUser = require('../utils/jwt').tokenForUser;

exports.signin = function (req, res) {
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = function (req, res, next) {
  const walletAddress = req.body.walletAddress;

  if (!walletAddress) {
    return res.status(422).send({ error: 'walletAddress must be provided' });
  }

  User.findOne({ walletAddress: walletAddress }, function (err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(422).send({ error: 'The wallet address is already in use...' });
    }

    const user = new User({
      walletAddress: walletAddress,
    });

    user.save(function (err) {
      if (err) {
        return next(err);
      }
      res.json({ token: tokenForUser(user) });
    });
  });
};
