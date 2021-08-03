import React from "react";
import { Redirect, Link } from "react-router-dom";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.form;

    this.errors = [];

    this.confirmed = "";

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateConfirmed = this.updateConfirmed.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
    this.errors = this.props.errors;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password === this.confirmed) {
      this.props.action(this.state).then(() => this.props.history.push("/"));
    } else {
      if (!this.errors.includes("Both passwords must be the same")) {
        this.errors.push("Both passwords must be the same");
        this.setState(this.state);
      }
    }
  }

  update(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  updateConfirmed(e) {
    this.confirmed = e.target.value;
  }

  renderErrors() {
    this.errors = this.props.errors;
    return (
      <ul>
        {this.errors.map((error, i) => (
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
      <form onSubmit={this.handleSubmit} className="signup-form">
        <h1 className="boogle-logo">
          <span>B</span>
          <span>o</span>
          <span>o</span>
          <span>g</span>
          <span>l</span>
          <span>e</span>
        </h1>

        <h2>Create Your Boogle Account</h2>
        <h3>to continue to bootube</h3>

        <div className="signup signup-username">
          <label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
            />
            <span className="placeholder">Username</span>
          </label>
        </div>

        <div className="signup signup-email">
          <label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.update("email")}
            />
            <span className="placeholder">Your email address</span>
          </label>
        </div>

        <div className="signup pass">
          <label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
            <span className="placeholder">Password</span>
          </label>

          <label>
            <input type="password" onChange={this.updateConfirmed} />
            <span className="placeholder">Confirm</span>
          </label>
        </div>
        <p>Use 6 or more characters</p>

        <h5 className="errors">{this.renderErrors()}</h5>

        <div className="button">
          <Link to="/login">Sign in instead</Link>
          <button>Next</button>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
