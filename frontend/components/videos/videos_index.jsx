import React from "react";
import VideoItem from "./video_item";

class VideosIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div>
      {this.props.videos.map((video) => {
        <VideoItem video={video} />;
      })}
    </div>;
  }
}

export default VideosIndex;
