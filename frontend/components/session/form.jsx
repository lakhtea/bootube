import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.form;
    console.log(this.props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .action(this.state)
      .then(() => this.props.history.push("/videos"));
  }

  update(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const newUserForm = () => {
      return this.props.formType === "Sign Up" ? (
        <label>
          Email:
          <input
            type="email"
            value={this.state.email}
            onChange={this.update("email")}
          />
        </label>
      ) : (
        ""
      );
    };

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{this.props.formType}</h2>
        {this.renderErrors()}
        <label>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
          />
        </label>
        {newUserForm()}
        <label>
          Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
          />
        </label>
        <button>{this.props.formType}</button>
      </form>
    );
  }
}

export default Form;
