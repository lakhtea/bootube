import React, { useEffect, useRef } from "react";
import VideoItem from "./video_item";
import UploadModal from "../videos/video_upload_container";

export default function VideosIndex({
  uploadModal,
  sidebar,
  videos,
  fetchVideos,
}) {
  const expandedSidebarIndexRef = useRef();

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    if (sidebar)
      expandedSidebarIndexRef.current.classList.add("expanded-sidebar");
    if (!sidebar)
      expandedSidebarIndexRef.current.classList.remove("expanded-sidebar");
  }, [sidebar]);

  if (uploadModal) return <UploadModal></UploadModal>;

  return (
    <div ref={expandedSidebarIndexRef} className="video-index-container">
      {videos.map((video, idx) => {
        return <VideoItem key={idx} idx={idx} video={video} />;
      })}
    </div>
  );
}
