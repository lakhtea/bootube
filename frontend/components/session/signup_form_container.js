import { connect } from "react-redux";
import { clearErrors } from "../../actions/errors_actions";
import { createUser } from "../../actions/session_actions";
import SignUpForm from "./signup_form";

const mapStateToProps = (state) => ({
  form: { username: "", email: "", password: "" },
  formType: "Sign up",
  errors: state.errors,
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(createUser(user)),
  removeErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
