const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const UserSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    username: {
      type: String,
      unique: true,
      minlength: 4,
      required: [true, "Please provide a username"],
    },
    name: { type: String, default: "Name" },
    surname: { type: String, default: "Surname" },
    contact: { type: String, default: "000-000-000" },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
      match: [
        /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$$/,
        "Please provide a valid email",
      ],
    },
    location: { type: String, default: "City" },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 6,
      select: false,
    },
    image: {type: String, default: "https://res.cloudinary.com/djespjbgy/image/upload/v1665572579/avatar-1577909_1280_xk6sqf.png"},
    roles: [{ type: String }],
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  console.log("this", this)
  // wont re-hashed it
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10); // higher number more secure
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// **->in mongoose we can create a method with object
UserSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedToken = async function () {
  return jwt.sign({ id: this._id, roles: this.roles }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// we want to reset password token
UserSchema.methods.getResetPasswordToken = async function (password) {
  // generate new token
  const resetToken = crypto.randomBytes(20).toString("hex");
  // field of model, refer for what ever object we a running for this function
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  // field "resetPasswordExpire"
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // 10min of current time
  return resetToken;
};

module.exports = User = mongoose.model("User", UserSchema);
