import React, { Component } from "react";

import Result from "./result";

export default class UserResults extends Component {
  componentDidMount() {
    if (this.props.users.length) return;
    this.props.action(this.props.term);
  }
  render() {
    const { users } = this.props;
    if (!users.length) return null;
    return (
      <div className="user-results results-list">
        {users.map((user) => (
          <Result type={"user"} key={user.id} user={user}></Result>
        ))}
      </div>
    );
  }
}
