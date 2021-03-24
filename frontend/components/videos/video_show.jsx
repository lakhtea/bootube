import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

class VideoShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videoUrl: "", volume: 50 };

    this.videoRef = React.createRef();

    this.playPause = this.playPause.bind(this);
    this.mute = this.mute.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchVideo(this.props.videoId)
      .then(() => this.setState({ videoUrl: this.props.video.videoUrl }));
  }

  playPause() {
    if (this.videoRef.current.paused) return this.videoRef.current.play();
    if (!this.videoRef.current.paused) return this.videoRef.current.pause();
  }

  mute() {
    if (this.videoRef.current.muted) {
      this.setState({ volume: 50 });
      return (this.videoRef.current.muted = false);
    }
    if (!this.videoRef.current.muted) {
      this.setState({ volume: 0 });
      return (this.videoRef.current.muted = true);
    }
  }

  updateVolume(e) {
    this.setState({ volume: e.target.value });
    this.videoRef.current.volume = this.state.volume / 100;
  }

  render() {
    if (this.state.videoUrl != "") {
      const video = this.props.video;
      return (
        <div className="video-show-container">
          <div className="main-video-container">
            <video
              onClick={this.playPause}
              ref={this.videoRef}
              className="main-video"
            >
              <source src={this.state.videoUrl} />
            </video>
            <div className="video-content">
              <div>
                <button onClick={this.playPause}>Play</button>
                {/* <button>Next</button> */}
                <button onClick={this.mute}>Volume</button>
                <input
                  type="range"
                  className="volume-slider"
                  value={this.state.volume}
                  onChange={this.updateVolume}
                />
              </div>
              <div>
                <button>Settings</button>
                <button>Fullscreen</button>
              </div>
            </div>
            <div className="video-primary-info">
              <div className="title">{video.title}</div>
              <div className="updated-at">
                {moment(video.updated_at).format("MMM Do, YYYY")}
              </div>
            </div>
            <div className="description-container">
              <div className="description-header">
                <Link to={`/channel/${video.uploader_id}`}>
                  {video.username}
                </Link>
              </div>
              <div className="description">
                <p>{video.description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div className="loading">...Loading</div>;
  }
}

export default VideoShow;
