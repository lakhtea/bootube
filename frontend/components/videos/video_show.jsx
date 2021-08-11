import React from "react";
import moment from "moment";
import CommentListContainer from "../comments/comment_list_container";
import CommentFormContainer from "../comments/comment_form_container";
import VideoIndexSidebarContainer from "./video_index_sidebar_container";
import { Link } from "react-router-dom";
import LikeDislikeContainer from "../likes/likedislike_container";
import UploadModal from "../videos/video_upload_container";

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: "",
      volume: 50,
      buffered: 0,
      watched: 0,
      duration: 0,
      liked: false,
      disliked: false,
      likeId: null,
    };

    this.bufferInterval;
    this.watchedInterval;

    this.videoRef = React.createRef();
    this.volumeRef = React.createRef();
    this.playPauseRef = React.createRef();
    this.controls = React.createRef();
    this.volumeSlider = React.createRef();

    this.playPause = this.playPause.bind(this);
    this.mute = this.mute.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
    this.fullscreen = this.fullscreen.bind(this);
    this.showControls = this.showControls.bind(this);
    this.hideControls = this.hideControls.bind(this);
    this.buffer = this.buffer.bind(this);
    this.watching = this.watching.bind(this);
    this.setDuration = this.setDuration.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
  }

  componentWillUnmount() {
    this.props.deleteCurrentVideo();
    clearInterval(this.bufferedInterval);
    clearInterval(this.watchedInterval);
  }

  componentDidUpdate() {
    if (this.props.match.params.videoId != this.props.video.id) {
      clearInterval(this.bufferedInterval);
      clearInterval(this.watchedInterval);

      this.props.fetchVideo(this.props.videoId);
    }
  }

  playPause() {
    if (this.videoRef.current.paused) {
      this.playPauseRef.current.firstElementChild.innerHTML = "pause";
      return this.videoRef.current.play();
    }

    if (!this.videoRef.current.paused) {
      this.playPauseRef.current.firstElementChild.innerHTML = "play_arrow";
      return this.videoRef.current.pause();
    }
  }

  buffer() {
    if (this.videoRef.current.buffered.length <= 1) {
      this.bufferedInterval = setInterval(() => {
        this.setState({ buffered: this.videoRef.current.buffered.length });
      }, 100);
    }
  }

  watching() {
    this.watchedInterval = setInterval(() => {
      this.setState({ watched: this.videoRef.current.currentTime });
    }, 10);
  }

  setDuration() {
    this.setState({ duration: this.videoRef.current.duration });
  }

  mute() {
    if (this.videoRef.current.muted) {
      this.setState({ volume: 50 });
      this.volumeRef.current.firstElementChild.innerHTML = "volume_up";
      return (this.videoRef.current.muted = false);
    }
    if (!this.videoRef.current.muted) {
      this.setState({ volume: 0 });
      this.volumeRef.current.firstElementChild.innerHTML = "volume_off";
      return (this.videoRef.current.muted = true);
    }
  }

  updateVolume(e) {
    this.setState({ volume: e.target.value });
    this.videoRef.current.volume = this.state.volume / 100;
  }

  fullscreen() {
    this.videoRef.current.requestFullscreen();
  }

  showControls() {
    this.controls.current.classList.remove("hidden");
  }

  hideControls() {
    this.controls.current.classList.add("hidden");
  }

  render() {
    const { video, currentUser, uploadModal } = this.props;
    if (uploadModal) return <UploadModal></UploadModal>;
    if (!video) return null;

    let loadedStyle = {
      width: `${this.state.buffered * 100}%`,
    };

    let watchedStyle = {
      width: `${(this.state.watched / this.state.duration) * 100}%`,
    };
    return (
      <div className="video-show-page">
        <div className="video-and-comments">
          <div className="video-show-container">
            <div className="main-video-container">
              <video
                autoPlay
                muted={false}
                onClick={this.playPause}
                onDoubleClick={this.fullscreen}
                onMouseOver={this.showControls}
                onMouseLeave={this.hideControls}
                ref={this.videoRef}
                className="main-video"
                onPlay={() => {
                  this.setDuration();
                  this.buffer();
                  this.watching();
                }}
                key={video.videoUrl}
              >
                <source src={video.videoUrl} />
              </video>

              <div
                onMouseOver={this.showControls}
                onMouseLeave={this.hideControls}
                ref={this.controls}
                className="video-content"
              >
                <div className="first-half">
                  <button ref={this.playPauseRef} onClick={this.playPause}>
                    <span className="material-icons">pause</span>
                  </button>

                  <button ref={this.volumeRef} onClick={this.mute}>
                    <span className="material-icons">volume_up</span>
                  </button>

                  <input
                    ref={this.volumeSlider}
                    type="range"
                    className="volume-slider"
                    value={this.state.volume}
                    onChange={this.updateVolume}
                  />
                </div>
                <div className="second-half">
                  {/* <button>
                    <span className="material-icons">settings</span>
                  </button> */}

                  <button onClick={this.fullscreen}>
                    <span className="material-icons">fullscreen</span>
                  </button>
                </div>

                <div className="scrub-bar">
                  <div style={loadedStyle} className="loaded-scrub-bar"></div>
                  <div style={watchedStyle} className="watched-scrub-bar">
                    <div className="slider"></div>
                  </div>
                </div>
              </div>
              <div className="video-primary-info">
                <div className="title">{video.title}</div>

                <div className="updated-at">
                  <span>{video.views} views </span>•
                  <li style={{ display: "inline" }}>
                    {moment(video.created_at).format("MMM Do, YYYY")}
                  </li>
                </div>
                <LikeDislikeContainer
                  id={video.id}
                  likes={video.likes}
                  dislikes={video.dislikes}
                  currentUser={currentUser?.id}
                  // liked={video.like?.[0]}
                  like={this.props.like}
                  unlike={this.props.unlike}
                ></LikeDislikeContainer>
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
          <div className="comment-components-container">
            <div className="comment-amount">
              {this.props.numOfComments} comments
            </div>
            <CommentFormContainer currentUser={this.props.currentUser} />
            <CommentListContainer />
          </div>
        </div>
        <div className="index-sidebar-container">
          <VideoIndexSidebarContainer
            videoId={this.props.videoId}
          ></VideoIndexSidebarContainer>
        </div>
      </div>
    );
  }
}

export default VideoShow;
