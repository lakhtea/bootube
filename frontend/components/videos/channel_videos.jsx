import React, { Component } from "react";
import VideoItem from "./video_item";

class ChannelVideos extends Component {
  render() {
    const { videos } = this.props;
    if (!videos.length) return null;
    return (
      <div className="channel-videos-container">
        <div className="channel-videos">
          {videos.map((video, idx) => (
            <VideoItem
              key={idx}
              loc={video.id}
              idx={idx}
              video={video}
            ></VideoItem>
          ))}
        </div>
      </div>
    );
  }
}

export default ChannelVideos;
