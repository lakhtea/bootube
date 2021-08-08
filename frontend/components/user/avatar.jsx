import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Avatar extends Component {
  render() {
    const { id, username } = this.props;
    return (
      <div className="renderer">
        <div className="avatar-container">
          <Link to={`/channel/${id}`} className="default-avatar">
            <span>{username[0].toUpperCase()}</span>
          </Link>
        </div>
      </div>
    );
  }
}
