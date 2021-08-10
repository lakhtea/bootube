import React, { Component } from "react";

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

          <div className="edit-video-modal-container">
            <div className="edit-video-details-container">
              <div className="edit-title"></div>
              <div className="edit-description"></div>
            </div>

            <div className="edit-video-container">
              <div className="edit-video"></div>
              <input type="file" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
