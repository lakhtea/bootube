import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";

const FormHook = (props) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    return () => {
      props.removeErrors();
    };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.action(values);
    await props.history.push("/");
  };

  const handleUsernameSubmit = async (e) => {
    e.preventDefault();
    await props.removeErrors();
    await props.validUser(values.username);
    await setValues({
      username: "",
      email: "",
      password: "",
    });
  };

  const loginDemoUser = async () => {
    await props.action({
      username: "Demo User",
      email: "demo_user@demo.com",
      password: "password",
    });
    await props.history.push("/");

    const renderErorrs = (
      <ul>
        {props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            <i className="fas fa-exclamation-circle"></i>
            <span className="error">{error}</span>
          </li>
        ))}
      </ul>
    );
  };

  return null;
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.form;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameSubmit = this.handleUsernameSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    await this.props.action(this.state);
    await this.props.history.push("/");
  }

  handleUsernameSubmit(e) {
    e.preventDefault();
    this.props.removeErrors();
    this.props.validUser(this.state.username).then(() =>
      this.setState({
        username: this.props.form.username,
        email: this.props.form.email,
        password: "",
      })
    );
  }

  loginDemoUser() {
    this.props
      .action({
        username: "Demo User",
        email: "demo_user@demo.com",
        password: "password",
      })
      .then(() => this.props.history.push("/"));
  }

  update(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  componentWillUnmount() {
    this.props.removeErrors();
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
    if (this.props.form.username) {
      return (
        <form onSubmit={this.handleSubmit} className="form">
          <div>
            <h1 className="boogle-logo">
              <span>B</span>
              <span>o</span>
              <span>o</span>
              <span>g</span>
              <span>l</span>
              <span>e</span>
            </h1>
            <h2 className="form-header">
              Hi <span className="username"></span>
              {this.state.username}
            </h2>
            <h3>{this.state.email}</h3>

            <div className="form-input">
              <label>
                <input
                  required
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
                <span className="signin-placeholder">Enter your password</span>
              </label>
              <h5 className="errors">{this.renderErrors()}</h5>
              <p></p>
              <div className="button">
                <Link to="/signup">Forgot Password?</Link>
                <button>Next</button>
              </div>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleUsernameSubmit} className="form">
          <div>
            <h1 className="boogle-logo">
              <span>B</span>
              <span>o</span>
              <span>o</span>
              <span>g</span>
              <span>l</span>
              <span>e</span>
            </h1>
            <h2 className="form-header">{this.props.formType}</h2>
            <h3>to continue to bootube</h3>

            <div className="form-input">
              <label>
                <input
                  required
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                />
                <span className="signin-placeholder">Email or username</span>
              </label>
              <h5 className="errors">{this.renderErrors()}</h5>
              <p>Not your computer? Please return it, thief.</p>
              <div className="button">
                <Link to="/signup">Create Account</Link>
                <div>
                  <button type="button" onClick={this.loginDemoUser}>
                    Demo User
                  </button>
                  <button>Next</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      );
    }
    {
    }
  }
}

export default Form;
