import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EditVideo extends Component {
  render() {
    const { video } = this.props;
    return (
      <div className="edit-video-modal-background">
        <div className="edit-video-modal">
          <div className="edit-video-modal-title">
            <span className="edit-video-title">{video.title}</span>
            <span className="material-icons">close</span>
          </div>
          <div className="details-header">
            <span>Details</span>
          </div>

          <div className="edit-video-modal-container">
            <div className="edit-video-details-container">
              <div className="edit-title"></div>
              <div className="edit-description"></div>
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
                <div className="filename">
                  <div>Filename</div>
                </div>
                <input
                  id="file-upload"
                  className="video-upload-file"
                  type="file"
                />
                <label className="upload-file" htmlFor="file-upload">
                  Update Video File
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
