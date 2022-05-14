import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const CommentForm = ({ classes }) => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className={classes.CommentForm}
    >
      <TextField
        id="outlined-basic"
        label="Add Comment"
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export default CommentForm;
