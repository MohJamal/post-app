import React from "react";
import Box from "@mui/material/Box";
import CommentsHead from "./CommentsHead";
import Comment from "./Comment";
import classes from "../css/Comments.module.css";

const Comments = () => {
  return (
    <Box>
      <CommentsHead className={classes.CommentsHead} />
      <Comment />
    </Box>
  );
};

export default Comments;
