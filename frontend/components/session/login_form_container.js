import { connect } from "react-redux";
import { login, validUser } from "../../actions/session_actions";
import Form from "./form";
import { clearErrors } from "../../actions/errors_actions";

const mapStateToProps = (state) => {
  if (state.session.attemptedLogin) {
    return {
      form: {
        username: state.session.attemptedLogin.username,
        email: state.session.attemptedLogin.email,
      },
      formType: "Sign in",
      errors: state.errors,
    };
  } else {
    return {
      form: { username: "", email: "", password: "" },
      formType: "Sign in",
      errors: state.errors,
    };
  }
};

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(login(user)),
  validUser: (username) => dispatch(validUser(username)),
  removeErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
