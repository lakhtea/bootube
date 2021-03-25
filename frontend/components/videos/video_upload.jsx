import React from "react";
import { Link } from "react-router-dom";

class VideoUploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);

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

    this.props.action(formData);

    this.setState({ title: "", description: "", videoFile: null });
  }

  handleFile(e) {
    this.videoData = e.currentTarget.files[0].name;
    this.setState({ videoFile: e.currentTarget.files[0] });
  }

  render() {
    return (
      <div className="video-upload-container">
        <form className="video-upload-form" onSubmit={this.handleSubmit}>
          <div className="video-upload-header">
            <p>Upload Videos</p>
            <Link to="/">
              <span class="material-icons">close</span>
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
        </form>
      </div>
    );
  }
}

export default VideoUploadForm;
