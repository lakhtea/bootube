import React, { Component } from "react";
import VideoItem from "./video_item";

export default class VideoIndexSidebar extends Component {
  componentDidMount() {
    this.props.fetchVideosShow();
  }
  render() {
    const videos = this.props.videos.filter((video) => {
      return video.id != this.props.videoId;
    });

    return (
      <div className="video-index-sidebar-container">
        {videos.map((video, idx) => {
          return <VideoItem key={idx} loc={video.id} idx={idx} video={video} />;
        })}
      </div>
    );
  }
}
