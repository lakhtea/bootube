import React from "react";
import { Switch, Route } from "react-router-dom";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import NavbarContainer from "./navbar/navbar_container";

const App = (props) => (
  <div>
    <Route path="/" component={NavbarContainer} />
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
    </Switch>
  </div>
);

export default App;
