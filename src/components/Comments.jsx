import React from "react";

import Box from "@mui/material/Box";
import CommentForm from "./CommentForm";
import CommentsHead from "./CommentsHead";
import CommentList from "./CommentList";
import Comment from "./Comment";
import classes from "../css/Comments.module.css";

const Comments = ({ comments }) => {
  return (
    <Box>
      <CommentForm classes={classes} />
      <CommentsHead classes={classes} commentsLength={comments.length} />
      <CommentList classes={classes}>
        {comments.map((c) => (
          <Comment classes={classes} commentsDetails={c} key={c.id} />
        ))}
      </CommentList>
    </Box>
  );
};

export default Comments;
