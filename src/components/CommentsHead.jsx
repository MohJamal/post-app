import React from "react";
import Box from "@mui/material/Box";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

const CommentsHead = ({ className }) => {
  return (
    <Box className={className}>
      <ModeCommentOutlinedIcon fontSize="large" />
      <Box component="span">3 comments</Box>
    </Box>
  );
};

export default CommentsHead;
