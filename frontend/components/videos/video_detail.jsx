import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const VideoDetail = ({ video }) => {
  return (
    <div>
      <Link to={`/videos/${video.id}`}>{video.title}</Link>
      <Link to={`/channel/${video.uploader_id}`}>{video.username}</Link>
      <Link to={`/videos/${video.id}`}>
        {moment(video.updated_at).fromNow()}
      </Link>
    </div>
  );
};

export default VideoDetail;
