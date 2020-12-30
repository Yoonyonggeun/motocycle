//userRouter folder
import express from "express";
import {
  userDetail,
  getEditProfile,
  postEditProfile,
  getChangePassword,
  postChangePassword,
} from "../controllers/userController.js";
import { onlyPrivate, uploadAvatar } from "../middleware.js";
import routes from "../routes.js";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(
  `/users/${routes.editProfile}`,
  onlyPrivate,
  uploadAvatar,
  postEditProfile
);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
