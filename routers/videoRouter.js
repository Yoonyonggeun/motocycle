import express from "express";
import {
  deleteVideo,
  getUpload,
  postUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
} from "../controllers/videoController.js";
import { onlyPrivate, uploadVideo } from "../middleware.js";
import routes from "../routes.js";

const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
