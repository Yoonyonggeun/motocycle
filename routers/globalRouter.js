// golbaRouter folder
import express from "express";
import passport from "passport";
import routes from "../routes.js";
import {
  getJoin,
  getLogin,
  getMe,
  githubLogin,
  kakaoLogin,
  logout,
  postGithubLogIn,
  postJoin,
  postKakaoLogIn,
  postLogin,
} from "../controllers/userController.js";
import { home, search } from "../controllers/videoController.js";
import { onlyPrivate, onlyPublic } from "../middleware.js";

const globalRouter = express.Router();

//global Join Get/Post
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

//
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

/////////github//////////
globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn
);

///////////kakao//////////////////
/*globalRouter.get(routes.kakao, kakaoLogin);

globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: "/login" }),
  postKakaoLogIn
);*/

globalRouter.get(routes.me, getMe);

export default globalRouter;
