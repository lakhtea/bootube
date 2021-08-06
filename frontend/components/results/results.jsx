import React, { Component } from "react";
import UserResults from "./userResults";
import VideoResults from "./videoResults";

export default class Results extends Component {
  render() {
    const { users, videos, query, onQuery } = this.props;
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
