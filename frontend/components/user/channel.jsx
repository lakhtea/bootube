import React, { Component } from "react";
import ChannelVideos from "../videos/channel_videos";
import UploadModal from "../videos/video_upload_container";
import Avatar from "./avatar";

export default class Channel extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.currentChannel);
    this.props.fetchUserVideos(this.props.currentChannel);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentChannel !== prevProps.currentChannel) {
      this.props.fetchUser(this.props.currentChannel);
      this.props.fetchUserVideos(this.props.currentChannel);
    }
  }
  render() {
    const {
      sidebar,
      user,
      videos,
      currentUser,
      deleteVideo,
      updateVideo,
      uploadModal,
      currentChannel,
    } = this.props;
    if (uploadModal) return <UploadModal></UploadModal>;
    const containerWidth = sidebar
      ? { width: "calc(100% - 240px" }
      : { width: "calc(100% - 72px)" };
    if (!user.username) return null;
    return (
      <div style={containerWidth} className="channel-container">
        <div className="channel-header">
          <div className="channel-label">
            <div className="channel-owner-detail">
              <Avatar
                avatar={user.avatarUrl}
                id={user.id}
                username={user.username}
              ></Avatar>
              <div className="channel-username">{user.username}</div>
            </div>
          </div>

          <div className="channel-content-selectors">
            <div className="channel-content-selector-video">Videos</div>
          </div>
        </div>
        <div className="channel-content">
          <ChannelVideos
            deleteVideo={deleteVideo}
            updateVideo={updateVideo}
            currentUser={currentUser}
            user={user}
            videos={videos}
            key={currentChannel}
          ></ChannelVideos>
        </div>
      </div>
    );
  }
}
