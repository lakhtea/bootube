import React from "react";
import VideoItem from "./video_item";
import UploadModal from "../videos/video_upload_container";

class VideosIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    if (this.props.uploadModal) return <UploadModal></UploadModal>;

    let marginLeft = { marginLeft: "90px" };
    this.props.sidebar
      ? (marginLeft = { marginLeft: "260px" })
      : (marginLeft = { marginLeft: "90px" });
    return (
      <div style={marginLeft} className="video-index-container">
        {this.props.videos.map((video, idx) => {
          return <VideoItem key={idx} idx={idx} video={video} />;
        })}
      </div>
    );
  }
}

export default VideosIndex;
