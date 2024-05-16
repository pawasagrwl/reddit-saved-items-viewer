// src/components/posts/PostMedia.tsx
import React, { useState, useEffect } from "react";

interface PostMediaProps {
  media: string;
  title: string;
}

const PostMedia: React.FC<PostMediaProps> = ({ media, title }) => {
  const [mediaType, setMediaType] = useState<
    "image" | "video" | "gallery" | "unknown"
  >("unknown");
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Determine media type based on file extension or URL pattern
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
    const videoExtensions = ["mp4", "webm", "ogg"];
    const url = new URL(media);
    const extension = url.pathname.split(".").pop()?.toLowerCase();

    if (extension && imageExtensions.includes(extension)) {
      setMediaType("image");
    } else if (extension && videoExtensions.includes(extension)) {
      setMediaType("video");
    } else if (url.pathname.includes("gallery")) {
      setMediaType("gallery");
    } else {
      setMediaType("unknown");
    }
  }, [media]);

  return (
    <>
      {mediaType === "image" && (
        <img
          src={media}
          alt={title}
          style={{ maxWidth: "100%", marginTop: "10px" }}
          loading="lazy"
        />
      )}
      {mediaType === "video" && (
        <>
          <video
            controls
            style={{
              maxWidth: "100%",
              marginTop: "10px",
              display: videoLoaded ? "block" : "none",
            }}
            onCanPlay={() => setVideoLoaded(true)}
          >
            <source src={media} type={`video/${media.split(".").pop()}`} />
            Your browser does not support the video tag.
          </video>
          {!videoLoaded && (
            <div style={{ marginTop: "10px" }}>Loading video...</div>
          )}
        </>
      )}
      {mediaType === "gallery" && (
        <div style={{ marginTop: "10px" }}>
          <a href={media} target="_blank" rel="noopener noreferrer">
            View Gallery
          </a>
        </div>
      )}
      {mediaType === "unknown" && ""}
    </>
  );
};

export default PostMedia;
