import React from "react";
import { Switch, Route } from "react-router-dom";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import NavbarContainer from "./navbar/navbar_container";
import VideoIndexContainer from "./videos/video_index_container";
import VideoUploadContainer from "./videos/video_upload_container";
import VideoShowContainer from "./videos/video_show_container";
import Sidebar from "./sidebar/sidebar";
import Tagbar from "./navbar/tagbar";
import { AuthRoute, ProtectedRoute } from "../util/auth_route";

const App = (props) => (
  <div>
    <NavbarContainer />
    <Route
      exact
      path="/"
      render={() => (
        <div className="home-page-container">
          <Sidebar />
          <Tagbar />
          <VideoIndexContainer />
        </div>
      )}
    />
    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute
        exact
        path="/videos/new"
        component={VideoUploadContainer}
      />
      <Route exact path="/videos/:videoId" component={VideoShowContainer} />
    </Switch>
  </div>
);

export default App;
