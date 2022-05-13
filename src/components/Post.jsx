import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Comments from "./Comments";
import classes from "../css/Post.module.css";

const Post = () => {
  return (
    <Container maxWidth="md" component="main" className={classes.Post}>
      <Typography variant="h3" component="h1" gutterBottom>
        Post Title
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={0.5}></Grid>
        <Grid item xs={11.5}>
          <Typography variant="body1" gutterBottom>
            <Box component="span">Lorem ipsum</Box> dolor sit amet, consectetur
            adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
            rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Comments />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Post;
