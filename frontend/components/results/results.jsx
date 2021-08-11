import React, { Component } from "react";
import UserResults from "./userResults";
import VideoResults from "./videoResults";
import UploadModal from "../videos/video_upload_container";

export default class Results extends Component {
  render() {
    const { users, videos, query, onQuery, uploadModal } = this.props;
    if (uploadModal) return <UploadModal></UploadModal>;
    const term = this.props.location.search.slice(14);
    return (
      <div className="results-container">
        <div className="results results-list">
          <div className="results-filters">Search Results</div>
          <UserResults action={query} term={term} users={users}></UserResults>
          <VideoResults
            action={onQuery}
            term={term}
            videos={videos}
          ></VideoResults>
        </div>
      </div>
    );
  }
}
