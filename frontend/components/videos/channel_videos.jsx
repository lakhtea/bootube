import React, { Component } from "react";
import ChannelVideoItem from "./channel_video_item";

class ChannelVideos extends Component {
  render() {
    const { videos, currentUser, user } = this.props;
    if (!videos.length) return null;
    return (
      <div className="channel-videos-container">
        <div className="channel-videos">
          {videos.map((video, idx) => (
            <ChannelVideoItem
              user={user}
              currentUser={currentUser}
              key={idx}
              video={video}
            ></ChannelVideoItem>
          ))}
        </div>
      </div>
    );
  }
}

export default ChannelVideos;
