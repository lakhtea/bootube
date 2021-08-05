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
    let paddingLeft = { paddingLeft: "90px" };
    this.props.sidebar
      ? (paddingLeft = { paddingLeft: "260px" })
      : (paddingLeft = { paddingLeft: "90px" });
    return (
      <div style={paddingLeft} className="video-index-container">
        {this.props.videos.map((video, idx) => {
          return <VideoItem key={idx} idx={idx} video={video} />;
        })}
      </div>
    );
  }
}

export default VideosIndex;
