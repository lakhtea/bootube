import React from "react";
import { Link } from "react-router-dom";

class UploadModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.renderErrors = this.renderErrors.bind(this);

    this.videoData;

    this.state = { title: "", description: "", videoFile: null };
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

    this.props
      .action(formData)
      .then(({ video }) => this.props.history.push(`/videos/${video.id}`));
  }

  handleFile(e) {
    this.videoData = e.currentTarget.files[0].name;
    this.setState({ videoFile: e.currentTarget.files[0] });
  }

  renderErrors() {
    return (
      <ul>
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
    return (
      <div className="video-upload-container">
        <div className="background-cover"></div>
        <form className="video-upload-form" onSubmit={this.handleSubmit}>
          <div className="video-upload-header">
            <p>Upload videos</p>
            <Link to="/">
              <span className="material-icons">close</span>
            </Link>
          </div>
          <div className="video-details">{this.videoData}</div>
          <label htmlFor="file-upload">
            <span type="file" id="upload-icon" className="material-icons">
              upload
            </span>
          </label>
          <input
            className="video-upload-title"
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
            placeholder="Title"
          />
          <input
            className="video-upload-description"
            type="text"
            value={this.state.description}
            onChange={this.update("description")}
            placeholder="Description"
          />
          <input
            id="file-upload"
            className="video-upload-file"
            type="file"
            onChange={this.handleFile}
          />
          <label className="upload-file" htmlFor="file-upload">
            SELECT FILES
          </label>
          <button className="video-upload-button">Finish uploading</button>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default UploadModal;
