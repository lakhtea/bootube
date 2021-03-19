import React from "react";
import { Redirect, Link } from "react-router-dom";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {" "}
            <i className="fas fa-exclamation-circle"></i>
            <span className="error">{error}</span>
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <form>
        <h1></h1>
      </form>
    );
  }
}

export default SignUpForm;
