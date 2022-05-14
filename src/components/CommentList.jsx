import React from "react";
import Box from "@mui/material/Box";

const CommentList = (props) => {
  return <Box className={props.classes.CommentList}>{props.children}</Box>;
};

export default CommentList;
