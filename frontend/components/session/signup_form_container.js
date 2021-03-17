import { connect } from "react-redux";
import { createUser } from "../../actions/session_actions";
import Form from "./form";

const mapStateToProps = (state) => ({
  form: { username: "", email: "", password: "" },
  formType: "Sign Up",
  errors: state.errors,
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(createUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
