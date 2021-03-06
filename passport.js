import passport from "passport";
import GithubStrategy from "passport-github";
//*import KakaoStrategy from "passport-kakao";
import {
  githubLoginCallback,
  kakaoLoginCallback,
} from "./controllers/userController";
import User from "./models/User";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:8000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

/*passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KA_ID,
      callbackURL: `http://localhost:8000${routes.kakaoCallback}`,
    },
    kakaoLoginCallback
  )
);
*/

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
