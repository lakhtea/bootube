import React, { Component } from "react";
import moment from "moment";
import { withRouter } from "react-router";
import onClickOutside from "react-onclickoutside";
import EditVideo from "./edit_video";

class ChannelVideoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      menuToggled: false,
      deleteVideo: false,
      editVideo: false,
    };

    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick() {
    this.setState({ editVideo: false, menuToggled: false });
  }

  handleClickOutside() {
    if (this.state.menuToggled) this.setState({ menuToggled: false });
  }

  render() {
    const { video, currentUser, user, deleteVideo, updateVideo } = this.props;
    const editVideoModal = this.state.editVideo ? (
      <EditVideo
        video={video}
        handleEditClick={this.handleEditClick}
        updateVideo={updateVideo}
      ></EditVideo>
    ) : null;
    const deleteVideoModal = this.state.deleteVideo ? (
      <div className="delete-video-modal-background">
        <div className="delete-video-modal">
          <h1 className="delete-verification-message">
            Delete video permanently?
          </h1>
          <div className="buttons">
            <button
              onClick={() => deleteVideo(video.id)}
              className="delete-video-button"
            >
              Delete
            </button>
            <button
              onClick={() =>
                this.setState({ deleteVideo: false, menuToggled: false })
              }
              className="cancel-delete-video-button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    ) : null;
    const menu =
      this.state.hover && user.id === currentUser.id ? (
        <div
          onMouseOver={() => this.setState({ hover: true })}
          onClick={(e) => {
            e.stopPropagation();
            this.setState({ menuToggled: !this.state.menuToggled });
          }}
          className="more-vert"
        >
          <span className="material-icons">more_vert</span>
        </div>
      ) : null;
    const expandedMenu = this.state.menuToggled ? (
      <div className="expanded-menu">
        <div
          onClick={(e) => {
            e.stopPropagation();
            this.setState({ deleteVideo: true });
          }}
          className="delete-video"
        >
          <span className="material-icons">delete</span> Delete Video
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            this.setState({ editVideo: true });
          }}
          className="edit-video"
        >
          <span className="material-icons">edit</span> Edit Video
        </div>
      </div>
    ) : null;

    return (
      <div className="video-index-item-container">
        {deleteVideoModal}
        {editVideoModal}
        <div
          onMouseOver={(e) => this.setState({ hover: true })}
          onMouseLeave={(e) => this.setState({ hover: false })}
          onClick={() => this.props.history.push(`/videos/${video.id}`)}
          className={`video-index-item`}
        >
          <video
            id="channel-video-item"
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
          <div className="video-detail">
            <div className="info">
              <div className="video-title">
                {video.title}
                {menu}
                {expandedMenu}
              </div>

              <div className="up-time">
                <div className="video-uploader">{video.username}</div>
                <div className="video-timestamp">
                  <span>{video.views} views </span>•
                  <li style={{ display: "inline" }}>
                    {moment(video.created_at).fromNow()}
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(onClickOutside(ChannelVideoItem));
