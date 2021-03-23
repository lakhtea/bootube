import React from "react";
import VideoItem from "./video_item";

class VideosIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    return (
      <div className="video-index-container">
        {this.props.videos.map((video) => {
          return <VideoItem key={video.id} video={video} />;
        })}
      </div>
    );
  }
}

export default VideosIndex;
