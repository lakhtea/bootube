import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Avatar from "../user/avatar";

export default class Result extends Component {
  render() {
    const { video, user, type } = this.props;
    if (type === "user")
      return (
        <Link className="user-result-container" to={`/channel/${user.id}`}>
          <Avatar id={user.id} username={user.username}></Avatar>
          <div className="result-user">{user.username}</div>
        </Link>
      );
    if (type === "video")
      return (
        <Link className="result-container" to={`/videos/${video.id}`}>
          <video
            className="result-video"
            key={video.id}
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => {
              e.target.pause();
              e.target.currentTime = 0;
            }}
            muted
            loop
          >
            <source src={video.videoUrl} />
          </video>
          <div className="result-details">
            <div className="result-title">{video.title}</div>
            <div className="views-date">
              <div className="result-views">{video.views} views</div>•
              <div className="result-date">
                {moment(video.created_at).fromNow()}
              </div>
            </div>

            <div className="result-username">{video.username}</div>
            <div className="result-description">{video.description}</div>
          </div>
        </Link>
      );
  }
}
