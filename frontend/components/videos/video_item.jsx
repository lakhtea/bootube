import React from "react";
import { Link } from "react-router-dom";

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <Link to={`/videos/${this.props.video.id}`}>
          Video
          {/* <VideoGif videoId={this.props.video.id} /> */}
        </Link>
        {/* <VideoDetail videoId={this.props.video.id} /> */}
      </div>
    );
  }
}

export default VideoItem;
