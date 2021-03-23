import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const VideoDetail = ({ video }) => {
  return (
    <div className="video-detail">
      <Link className="video-title" to={`/videos/${video.id}`}>
        {video.title}
      </Link>
      <div className="up-time">
        <Link className="video-uploader" to={`/channel/${video.uploader_id}`}>
          {video.username}
        </Link>
        <Link className="video-timestamp" to={`/videos/${video.id}`}>
          {moment(video.updated_at).fromNow()}
        </Link>
      </div>
    </div>
  );
};

export default VideoDetail;
