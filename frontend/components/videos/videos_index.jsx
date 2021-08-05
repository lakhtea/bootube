import React from "react";
import VideoItem from "./video_item";

class VideosIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { style: { paddingLeft: "90px" } };
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    console.log(this.props);
    if (this.props.sidebar && this.state.style.paddingLeft === "90px") {
      console.log("pee");
      this.setState({ style: { paddingLeft: "260px" } });
    }
    if (!this.props.sidebar && this.state.style.paddingLeft === "260px") {
      console.log("poop");
      this.setState({ style: { paddingLeft: "90px" } });
    }
    return (
      <div style={this.state.style} className="video-index-container">
        {this.props.videos.map((video, idx) => {
          return <VideoItem key={idx} idx={idx} video={video} />;
        })}
      </div>
    );
  }
}

export default VideosIndex;
