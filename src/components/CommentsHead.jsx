import React from "react";
import Box from "@mui/material/Box";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

const CommentsHead = ({ classes, commentsLength }) => {
  return (
    <Box className={classes.CommentsHead}>
      <ModeCommentOutlinedIcon fontSize="large" />
      <Box component="span">{commentsLength} comments</Box>
    </Box>
  );
};

export default CommentsHead;
