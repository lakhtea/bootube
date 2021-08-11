import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EditVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.video.title,
      description: this.props.video.description,
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {}

  render() {
    const { video } = this.props;
    return (
      <div className="edit-video-modal-background">
        <div className="edit-video-modal">
          <div style={{ width: "100%" }}>
            <div className="edit-video-modal-title">
              <span className="edit-video-title">{video.title}</span>
              <span
                onClick={() => this.props.handleEditClick()}
                className="material-icons"
              >
                close
              </span>
            </div>
            <div className="details-header">
              <span>Details</span>
            </div>

            <div className="edit-video-modal-container">
              <div className="edit-video-details-container">
                <div className="edit-title">
                  <div className="header">Title (required)</div>
                  <textarea
                    placeholder="Add a title that describes your video"
                    className="edit-title-content"
                    required
                    value={this.state.title}
                  ></textarea>
                </div>

                <div className="edit-description">
                  <div className="header">Description (required)</div>
                  <textarea
                    placeholder="Tell viewers about your video"
                    className="edit-description-content"
                    required
                    value={this.state.description}
                  ></textarea>
                </div>
              </div>

              <div className="edit-video-container">
                <div className="edit-modal-video">
                  <video src={video.videoUrl}></video>
                </div>
                <div className="edit-modal-video-info">
                  <div className="video-link">
                    <div>Video Link</div>
                    <Link to={`/videos/${video.id}`}>
                      localhost:3000/#/videos/{video.id}
                    </Link>
                  </div>
                  <div className="file-container">
                    <div className="filename-container">
                      <div className="filename-header">
                        <div>Filename</div>
                      </div>
                      <div className="filename">{video.title}</div>
                    </div>
                    <input
                      id="file-upload"
                      className="video-upload-file"
                      type="file"
                    />
                    <label className="edit-file" htmlFor="file-upload">
                      Update video file
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-bar">
            <div className="finish-editing">Save changes</div>
          </div>
        </div>
      </div>
    );
  }
}
