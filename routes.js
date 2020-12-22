// globalRouter
const HOME = "/";
const LOGIN = "/login";
const LOGOUT = "/logout";
const JOIN = "/join";
const SEARCH = "/search";

//userRouter
const USERS = "/users";
const EDITPROFILE = "/editProfile";
const CHANGEPASSWORD = "/changePassword";
const USER_DETAIL = "/:id";

// Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  login: LOGIN,
  logout: LOGOUT,
  join: JOIN,
  search: SEARCH,
  users: USERS,
  editProfile: EDITPROFILE,
  changePassword: CHANGEPASSWORD,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    }
    return USER_DETAIL;
  },
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `/videos/${id}`;
    }
    return VIDEO_DETAIL;
  },
  editVideo: (id) => {
    if (id) {
      return `/videos/${id}/edit`;
    }
    return EDIT_VIDEO;
  },
  deleteVideo: (id) => {
    if (id) {
      return `/videos/${id}/delete`;
    }
    return DELETE_VIDEO;
  },
};

export default routes;
