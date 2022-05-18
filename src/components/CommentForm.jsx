import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import APIService from "../API.services";

const CommentForm = ({ classes }) => {
  const textRef = useRef();
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const newComment = {
      postId: comments[0].postId,
      id: comments.length + 1,
      name: "Mohammedjamal",
      email: "test@test.com",
      body: textRef.current.value,
    };

    try {
      dispatch({
        type: "addComment",
        payload: newComment,
      });

      await APIService.addComment(newComment);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className={classes.CommentForm}
      onSubmit={addCommentHandler}
    >
      <TextField
        id="outlined-basic"
        label="Add Comment"
        variant="outlined"
        fullWidth
        inputRef={textRef}
      />
    </Box>
  );
};

export default CommentForm;
