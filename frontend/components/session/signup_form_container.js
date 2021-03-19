import { connect } from "react-redux";
import { createUser } from "../../actions/session_actions";
import SignUpForm from "./signup_form";

const mapStateToProps = (state) => ({
  form: { username: "", email: "", password: "" },
  formType: "Sign up",
  errors: state.errors,
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(createUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
