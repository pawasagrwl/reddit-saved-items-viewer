// src/components/common/CardHeader.tsx
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";

interface CardHeaderProps {
  title: string;
  author: string;
  subreddit: string;
  datetime: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  author,
  subreddit,
  datetime,
}) => (
  <Box sx={{ mb: 2 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          src={`https://www.redditstatic.com/avatars/avatar_default_01_FF4500.png`} // Placeholder icon
          sx={{ width: 24, height: 24, marginRight: 1 }}
        />
        <Box>
          <Link
            href={`https://www.reddit.com/r/${subreddit}/`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'text.primary', textDecoration: 'none', fontWeight: 'bold' }}
          >
            r/{subreddit}
          </Link>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <Link
              href={`https://www.reddit.com/user/${author}/`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary', textDecoration: 'none' }}
            >
              u/{author}
            </Link>
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {datetime}
      </Typography>
    </Box>
    <Typography variant="h6" component="div" sx={{ mt: 1 }}>
      {title}
    </Typography>
  </Box>
);

export default CardHeader;
