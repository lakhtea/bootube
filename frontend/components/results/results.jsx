import React, { Component } from "react";

import Result from "./result";

export default class Results extends Component {
  render() {
    const { videos } = this.props;
    return (
      <div className="results-container">
        {videos.map((video) => (
          <Result video={video}></Result>
        ))}
      </div>
    );
  }
}
