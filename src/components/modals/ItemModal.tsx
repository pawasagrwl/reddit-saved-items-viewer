// src/components/modals/ItemModal.tsx

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactMarkdown from "react-markdown";

interface ItemModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  body: React.ReactNode;
}

const ItemModal: React.FC<ItemModalProps> = ({
  open,
  onClose,
  title,
  body,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {typeof body === "string" ? (
          <Typography
            variant="body1"
            component="div"
            sx={{ whiteSpace: "pre-line" }}
          >
            <ReactMarkdown>{body}</ReactMarkdown>
          </Typography>
        ) : (
          body
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ItemModal;
