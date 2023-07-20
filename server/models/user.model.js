const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    walletAddress: {
      type: String,
      unique: true,
    },
    username: String,
    avatar: {
      type: String,
      default: '/assets/images/avatar/default.jpg',
    },
  },
  {
    timestamps: true,
  },
);
const Wallet = mongoose.model('Users', userSchema);

module.exports = Wallet;
