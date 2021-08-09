import React, { Component } from "react";

export default class Channel extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.location.pathname.slice(9));
  }

  render() {
    console.log(this.props);
    const { sidebar, username } = this.props;
    const containerWidth = sidebar
      ? { width: "calc(100% - 240px" }
      : { width: "calc(100% - 72px)" };
    if (!username) return null;
    return (
      <div style={containerWidth} className="channel-container">
        <div className="channel-header">
          <div className="channel-label">
            <div className="default-avatar">
              <span>{username[0].toUpperCase()}</span>
            </div>
          </div>
          <div className="channel-content-selectors"></div>
        </div>
        <div className="channel-content"></div>
      </div>
    );
  }
}
