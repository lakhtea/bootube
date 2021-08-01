import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Result extends Component {
  render() {
    const { video } = this.props;
    return (
      <Link className="result-container" to={`/videos/${video.id}`}>
        <video
          className="result-video"
          key={video.id}
          onMouseOver={(e) => e.target.play()}
          onMouseOut={(e) => {
            e.target.pause();
            e.target.currentTime = 0;
          }}
          muted
          loop
        >
          <source src={video.videoUrl} />
        </video>
        <div className="result-details">
          <div className="result-title">{video.title}</div>
          <div className="result-views">{video.views}</div>
          <div className="result-username">{video.username}</div>
          <div className="result-description">{video.description}</div>
        </div>
      </Link>
    );
  }
}
