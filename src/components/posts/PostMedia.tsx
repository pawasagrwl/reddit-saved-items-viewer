// src/components/posts/PostMedia.tsx
import React, { useState } from "react";

interface PostMediaProps {
  media: string;
  title: string;
}

const PostMedia: React.FC<PostMediaProps> = ({ media, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <img
        src={media}
        alt={title}
        style={{
          maxWidth: "100%",
          marginTop: "10px",
          display: imageLoaded ? "block" : "none",
        }}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
      />
      {!imageLoaded && (
        <div style={{ marginTop: "10px" }}>Loading image...</div>
      )}
    </>
  );
};

export default PostMedia;
