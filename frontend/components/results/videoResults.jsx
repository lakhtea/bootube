import React, { Component } from "react";

import Result from "./result";

export default class VideoResults extends Component {
  componentDidMount() {
    if (this.props.videos.length) return null;
    this.props.action(this.props.term);
  }
  render() {
    const { videos } = this.props;
    if (!videos.length) return null;
    return (
      <div className="results-list">
        {videos.map((video) => (
          <Result type={"video"} key={video.id} video={video}></Result>
        ))}
      </div>
    );
  }
}
