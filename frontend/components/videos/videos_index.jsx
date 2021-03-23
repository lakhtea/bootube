import React from "react";
import VideoItem from "./video_item";

class VideosIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    return (
      <div className="video-index-container">
        {this.props.videos.map((video, idx) => {
          return <VideoItem key={video.id} idx={idx} video={video} />;
        })}
      </div>
    );
  }
}

export default VideosIndex;
