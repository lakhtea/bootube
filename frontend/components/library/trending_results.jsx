import React, { useState, useEffect } from "react";
import VideoItem from "../videos/video_item";

export default function TrendingResults({ videos, trending }) {
  useEffect(() => {
    if (!videos.length) trending();
  }, []);

  return (
    <>
      <h1 className="trending-header">Trending videos</h1>
      <div className="trending-videos-container">
        {videos.map((video, idx) => (
          <VideoItem key={idx} idx={idx} video={video} />
        ))}
      </div>
    </>
  );
}
