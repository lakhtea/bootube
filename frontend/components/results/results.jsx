import React, { Component } from "react";

import Result from "./result";

export default class Results extends Component {
  componentDidMount() {
    if (this.props.videos.length) return;
    this.props.onQuery(this.props.location.search.slice(14));
  }
  render() {
    if (!this.props.videos.length) return null;

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
