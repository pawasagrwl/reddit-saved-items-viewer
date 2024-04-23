// src/components/ContentTabs.tsx

import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PostCard from "./content/PostCard";
import CommentCard from "./content/CommentCard";
import { Post, Comment } from "../../common/types/savedItemsTypes";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

interface ContentTabsProps {
  posts: Post[];
  comments: Comment[];
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const ContentTabs: React.FC<ContentTabsProps> = ({ posts, comments }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "background.paper",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {/* Update Tab labels to show counts */}
          <Tab label={`Posts (${posts.length})`} />
          <Tab label={`Comments (${comments.length})`} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            subreddit={post.subreddit}
            datetime={post.datetime}
            body={post.body}
            media={post.media}
            votes={post.votes}
            url={post.url}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {comments.map((comment, index) => (
          <CommentCard
            key={index}
            postTitle={comment.post_title}
            subreddit={comment.post_subreddit}
            datetime={comment.datetime}
            commentText={comment.comment_text}
            votes={comment.votes}
            postUrl={comment.post_url}
            commentUrl={comment.comment_url}
          />
        ))}
      </TabPanel>
    </Box>
  );
};

export default ContentTabs;
