// src/App.tsx

import React, { useEffect, useState } from "react";
import { SavedItems } from "./types";

const App: React.FC = () => {
  const [savedItems, setSavedItems] = useState<SavedItems | null>(null);

  useEffect(() => {
    fetch("saved_items.json") // Adjust the path as necessary
      .then((response) => response.json())
      .then((data: SavedItems) => setSavedItems(data))
      .catch((error) => console.error("Error fetching saved items:", error));
  }, []);

  // Continuing from the previous App.tsx code

  return (
    <div>
      <h1>Saved Reddit Items</h1>
      {savedItems ? (
        <>
          <h2>Posts</h2>
          <ul>
            {savedItems.content.posts.map((post, index) => (
              <li key={index}>
                <h3>
                  {post.title} ({post.votes} votes)
                </h3>
                <p>
                  {post.subreddit} - {new Date(post.datetime).toLocaleString()}
                </p>
                <p>{post.body}</p>
                <a href={post.url} target="_blank">
                  Read more
                </a>
              </li>
            ))}
          </ul>
          <h2>Comments132</h2>
          <ul>
            {savedItems.content.comments.map((comment, index) => (
              <li key={index}>
                <h3>
                  {comment.post_title} ({comment.votes} votes)
                </h3>
                <p>{new Date(comment.datetime).toLocaleString()}</p>
                <p>{comment.comment_text}</p>
                <a href={comment.comment_url} target="_blank">
                  Read comment
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading saved items...</p>
      )}
    </div>
  );
};

export default App;
