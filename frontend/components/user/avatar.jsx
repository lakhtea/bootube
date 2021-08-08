import React, { Component } from "react";

export default class Avatar extends Component {
  render() {
    const { username } = this.props;
    return (
      <div className="renderer">
        <div className="avatar-container">
          <div className="default-avatar">
            <span>{username[0].toUpperCase()}</span>
          </div>
        </div>
      </div>
    );
  }
}
