import React from "react";
import { Link } from "react-router-dom";
import VideoDetail from "./video_detail";
// import { ReactVideo, YoutubePlayer, Player } from "reactjs-media";

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  hover() {
    return true;
  }

  render() {
    return (
      <div className={`video-index-item item-${this.props.idx}`}>
        <Link to={`/videos/${this.props.video.id}`}>
          <video
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => {
              e.target.pause();
              e.target.currentTime = 0;
            }}
            muted
            loop
          >
            <source src="https://bootube-seeds.s3.amazonaws.com/spiderweb.mp4" />
          </video>
        </Link>
        <VideoDetail video={this.props.video} />
      </div>
    );
  }
}

export default VideoItem;
