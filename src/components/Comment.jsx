import React from "react";
import { useDispatch } from "react-redux";
import APIService from "../API.services";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import img from "../assets/img/user.jpg";

const Comment = ({ classes, commentsDetails }) => {
  const dispatch = useDispatch();

  const EditComment = (e) => {
    e.preventDefault();
    alert("edit");
  };

  const RemoveComment = async (e) => {
    e.preventDefault();

    try {
      dispatch({
        type: "RemoveComment",
        payload: commentsDetails.id,
      });

      const res = await APIService.deleteComment(commentsDetails.id);

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box className={classes.Comment}>
      <Grid container spacing={0.5}>
        <Grid item xs={1.2}>
          <Avatar alt="user" src={img} className={classes.Avatar} />
        </Grid>
        <Grid item xs={10.8}>
          <Typography variant="h5" component="h2" gutterBottom>
            {commentsDetails.name}
          </Typography>
          <Box>
            <Link href="#" underline="hover" onClick={EditComment}>
              Edit
            </Link>
            ||
            <Link href="#" underline="hover" onClick={RemoveComment}>
              Remove
            </Link>
          </Box>
          <Typography variant="body2">{commentsDetails.body}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Comment;
