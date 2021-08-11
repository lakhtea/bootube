import React from "react";
import { Link } from "react-router-dom";

class UploadModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.renderErrors = this.renderErrors.bind(this);

    this.state = {
      title: "",
      description: "",
      videoFile: null,
      videoData: null,
      firstPage: true,
      videoUrl: null,
    };
  }

  update(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video[title]", this.state.title);
    formData.append("video[description]", this.state.description);
    formData.append("video[vid]", this.state.videoFile);
    formData.append("video[uploader_id]", this.props.currentUser.id);

    this.props.action(formData).then(({ video }) => {
      this.props.uploadModal(false);
      this.props.history.push(`/videos/${video.id}`);
    });
  }

  handleFile(e) {
    let name = "";
    if (e.currentTarget.files[0].name.lastIndexOf(".") > 0)
      name = e.currentTarget.files[0].name.substring(
        0,
        e.currentTarget.files[0].name.lastIndexOf(".")
      );
    this.setState({
      videoFile: e.currentTarget.files[0],
      videoData: e.currentTarget.files[0].name,
      firstPage: false,
      title: name,
      videoUrl: URL.createObjectURL(e.currentTarget.files[0]),
    });
  }

  renderErrors() {
    return (
      <ul
        style={{
          color: "#3ea6ff",
          alignSelf: "flex-start",
          paddingLeft: "48px",
        }}
      >
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {" "}
            <i className="fas fa-exclamation-circle"></i>
            <span className="error">{error}</span>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return this.state.firstPage ? (
      <div className="video-upload-container">
        <div className="background-cover">
          <form onSubmit={this.handleSubmit} className="video-upload-form">
            <div className="video-upload-header">
              <span className="upload-videos">Upload videos</span>
              <span
                onClick={() => this.props.uploadModal(false)}
                className="material-icons"
              >
                close
              </span>
            </div>
            <div className="flex-separator">
              <label htmlFor="file-upload">
                <span type="file" id="upload-icon" className="material-icons">
                  upload
                </span>
              </label>
              <input
                id="file-upload"
                className="video-upload-file"
                type="file"
                onChange={this.handleFile}
              />
              <label className="upload-file" htmlFor="file-upload">
                <span>SELECT FILES</span>
              </label>
            </div>
          </form>
        </div>
      </div>
    ) : (
      <div className="edit-video-modal-background">
        <div className="edit-video-modal">
          <div style={{ width: "100%" }}>
            <div className="edit-video-modal-title">
              <span className="edit-video-title">{this.state.title}</span>
              <span
                onClick={() => this.props.uploadModal(false)}
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
                    onChange={this.update("title")}
                  ></textarea>
                </div>

                <div className="edit-description">
                  <div className="header">Description (required)</div>
                  <textarea
                    placeholder="Tell viewers about your video"
                    className="edit-description-content"
                    required
                    value={this.state.description}
                    onChange={this.update("description")}
                  ></textarea>
                </div>
              </div>

              <div className="edit-video-container">
                <div className="edit-modal-video">
                  <video src={this.state.videoUrl}></video>
                </div>
                <div className="edit-modal-video-info">
                  <div className="file-container">
                    <div className="filename-container">
                      <div className="filename-header">
                        <div>Filename</div>
                      </div>
                      <div className="filename">{this.state.videoData}</div>
                    </div>
                    <input
                      onChange={this.handleFile}
                      id="file-edit-upload"
                      className="video-upload-file"
                      type="file"
                    />
                    <label className="edit-file" htmlFor="file-edit-upload">
                      <span>Upload video</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.renderErrors()}

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

export default UploadModal;
