const express = require("express");
const router = express.Router();

const AuthController = require("../../controllers/AuthController");
const { protect, verifyRoles } = require("../../middleware/auth");
const { ROLES } = require("../../config/roles_list");

router
  .route("/")
  .get(protect, verifyRoles(ROLES.Admin, ROLES.User), AuthController.loadUser);
router.route("/register").post(AuthController.register);
router.route("/login").post(AuthController.login);
router.route("/forgotpassword").post(AuthController.forgotPassword);
router.route("/resetpassword/:resetToken").put(AuthController.resetPassword);

module.exports = router;
