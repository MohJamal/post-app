import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import img from "../assets/img/user.jpg";

const Comment = ({ classes, commentsDetails }) => {
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
          <Typography variant="body2">{commentsDetails.body}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Comment;
