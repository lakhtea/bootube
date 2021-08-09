import React, { Component } from "react";

export default class Channel extends Component {
  componentDidMount() {
    // this.props.fetchUser(this.props.match);
  }
  render() {
    console.log(this.props);
    const { sidebar, username } = this.props;
    const containerWidth = sidebar
      ? { width: "calc(100% - 240px" }
      : { width: "calc(100% - 72px)" };
    return (
      <div style={containerWidth} className="channel-container">
        <div className="channel-header">
          <div className="channel-label">
            <div className="default-avatar"></div>
          </div>
          <div className="channel-content-selectors"></div>
        </div>
        <div className="channel-content"></div>
      </div>
    );
  }
}
