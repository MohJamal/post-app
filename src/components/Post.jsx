import React, { useEffect, useState } from "react";
import axios from "axios";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Comments from "./Comments";

import classes from "../css/Post.module.css";

const Post = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  async function getPost() {
    try {
      const response = await axios.get(process.env.REACT_APP_API_KEY);
      const data = await response.data;
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getComments() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_KEY}/comments`
      );
      const data = await response.data;
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPost();
    getComments();
  }, []);

  return (
    <Container maxWidth="md" component="main" className={classes.Post}>
      <Typography variant="h4" component="h1" gutterBottom>
        {post.title}
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={0.5}></Grid>
        <Grid item xs={11.5}>
          <Typography variant="body1" gutterBottom className={classes.PostBody}>
            {post.body}
          </Typography>

          <Comments comments={comments} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Post;
