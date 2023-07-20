const User = require('../models/user.model');
const tokenForUser = require('../utils/jwt').tokenForUser;

exports.edit = async (req, res, next) => {
  try {
    const file = req.file;

    let user = await User.findById({ _id: req.user._id });
    user.username = req.body.name;
    file && (user.avatar = (file.destination + '/' + file.filename).replace('./public', ''));
    await user.save();

    res.send({ token: tokenForUser(user) });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
