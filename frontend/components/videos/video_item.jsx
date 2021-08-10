import React from "react";
import { Link } from "react-router-dom";
import VideoDetail from "./video_detail";

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`video-index-item item-${this.props.idx}`}>
        <Link to={`/videos/${this.props.video.id}`}>
          <video
            key={this.props.video.id}
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => {
              e.target.pause();
              e.target.currentTime = 0;
            }}
            muted
            loop
          >
            <source src={this.props.video.videoUrl} />
          </video>
        </Link>
        <VideoDetail video={this.props.video} />
      </div>
    );
  }
}

export default VideoItem;
