import React, { Component } from "react";

import Result from "./result";

export default class Results extends Component {
  render() {
    const { videos } = this.props;
    return (
      <div className="results-container">
        <div className="results-list">
          <div className="results-filters"></div>
          {videos.map((video) => (
            <Result key={video.id} video={video}></Result>
          ))}
        </div>
      </div>
    );
  }
}
