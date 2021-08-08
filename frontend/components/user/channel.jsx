import React, { Component } from "react";

export default class Channel extends Component {
  render() {
    return (
      <div className="channel-container">
        <div className="channel-header">
          <div className="channel-label"></div>
          <div className="channel-content-selectors"></div>
        </div>
        <div className="channel-content"></div>
      </div>
    );
  }
}
