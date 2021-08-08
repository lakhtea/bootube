import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Avatar from "../user/avatar";

const VideoDetail = ({ video }) => {
  return (
    <div className="video-detail">
      <div className="avatar">
        <Avatar username={video.username}></Avatar>
      </div>
      <div className="info">
        <Link className="video-title" to={`/videos/${video.id}`}>
          {video.title}
        </Link>
        <div className="up-time">
          <Link className="video-uploader" to={`/channel/${video.uploader_id}`}>
            {video.username}
          </Link>
          <Link className="video-timestamp" to={`/videos/${video.id}`}>
            <span>{video.views} views </span>•
            <li style={{ display: "inline" }}>
              {moment(video.created_at).fromNow()}
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
