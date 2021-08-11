import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Avatar extends Component {
  render() {
    const { id, username, avatar, clickable } = this.props;
    const click = clickable
      ? () => this.props.history.push(`/channel/${id}`)
      : null;
    if (avatar)
      return <img onClick={click} className="avatar" src={avatar} alt="" />;
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

export default withRouter(Avatar);
