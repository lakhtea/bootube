import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import Form from "./form";

const mapStateToProps = (state) => ({
  form: { username: "", email: "", password: "" },
  formType: "Sign In",
  errors: state.errors,
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
