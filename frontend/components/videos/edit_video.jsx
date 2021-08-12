import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class EditVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.video.title,
      description: this.props.video.description,
      filename: null,
      videoFile: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video[title]", this.state.title);
    formData.append("video[description]", this.state.description);
    if (this.state.videoFile)
      formData.append("video[vid]", this.state.videoFile);

    this.props
      .updateVideo(formData, this.props.video.id)
      .then(({ video }) => this.props.history.push(`/videos/${video.id}`));
  }

  update(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  updateFile() {
    return (e) =>
      this.setState({
        filename: e.target.files[0].name,
        videoFile: e.target.files[0],
      });
  }

  render() {
    const { video } = this.props;
    const videoUrl = this.state.videoFile
      ? URL.createObjectURL(this.state.videoFile)
      : video.videoUrl;
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
                    defaultValue={this.state.title}
                    onChange={this.update("title")}
                  ></textarea>
                </div>

                <div className="edit-description">
                  <div className="header">Description (required)</div>
                  <textarea
                    placeholder="Tell viewers about your video"
                    className="edit-description-content"
                    required
                    defaultValue={this.state.description}
                    onChange={this.update("description")}
                  ></textarea>
                </div>
              </div>

              <div className="edit-video-container">
                <div className="edit-modal-video">
                  <video controls autoPlay muted={false} src={videoUrl}></video>
                </div>
                <div className="edit-modal-video-info">
                  <div className="video-link">
                    <div>Video Link</div>
                    <Link to={`/videos/${video.id}`}>
                      bootube.herokuapp.com/#/videos/{video.id}
                    </Link>
                  </div>
                  <div className="file-container">
                    <div className="filename-container">
                      <div className="filename-header">
                        <div>Filename</div>
                      </div>
                      <div className="filename">{this.state.filename}</div>
                    </div>
                    <input
                      onChange={this.updateFile()}
                      id="file-edit-upload"
                      className="video-upload-file"
                      type="file"
                      defaultValue={this.state.filename}
                    />
                    <label className="edit-file" htmlFor="file-edit-upload">
                      <span>Update video</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-bar">
            <div onClick={this.handleSubmit} className="finish-editing">
              Save changes
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EditVideo);
