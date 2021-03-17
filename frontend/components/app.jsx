import React from "react";
import { Switch, Route } from "react-router-dom";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import NavbarContainer from "./navbar/navbar_container";
import { AuthRoute, ProtectedRoute } from "../util/auth_route";

const App = (props) => (
  <div>
    <Route exact path="/" component={NavbarContainer} />
    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
    </Switch>
  </div>
);

export default App;
