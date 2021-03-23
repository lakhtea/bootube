import React from "react";

class VideoUploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);

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
  }

  handleFile(e) {
    this.setState({ videoFile: e.currentTarget.files[0] });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.update("title")}
        />
        <input
          type="text"
          value={this.state.description}
          onChange={this.update("description")}
        />
        <input type="file" onChange={this.handleFile} />
        <button>Upload Video!</button>
      </form>
    );
  }
}

export default VideoUploadForm;
