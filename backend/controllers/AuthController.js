const mongoose = require("mongoose");

const User = require("../models/User");
const errorHandler = require("../middleware/errorHandler");
const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

exports.loadUser = asyncHandler(async (req, res, next) => {
  const user = req.user;
  res.status(200).json({ user });
});
exports.register = (
  async (req, res, next) => {
    const { username, email, password, roles } = req.body;
    const newUser = await User.create({
      _id: mongoose.Types.ObjectId(),
      username,
      email,
      password,
      roles
    });
    sendToken(newUser, 201, res);
  }
);

exports.login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    next(new ErrorResponse(`Please provide username and password`, 400));
  }
  // is exist User with 'email'
  const user = await User.findOne({ username }).select("+password"); // everything return
  if (!user) {
    return next(new ErrorResponse(`Invalid credentials`, 401)); // 401 - "unauthorized"
  }
  // compare passwords
  // "findOne" return us a model, and "User" model have access to "matchPassword" function
  const isMatch = await user.matchPasswords(password);
  if (!isMatch) {
    return next(new ErrorResponse(`Invalid credentials`, 401));
  }
  sendToken(user, 200, res);
});
exports.forgotPassword = asyncHandler(async (req, res, next) => {
  res.send("This is Forgot password route");
});

exports.resetPassword = (req, res, next) => {
  res.send("This is Reset password route");
};

const sendToken = async (user, statusCode, res) => {
  const token = await user.getSignedToken();
  res.status(statusCode).json({
    succes: true,
    token,
    user,
  });
};
