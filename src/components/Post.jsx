import React, { useEffect, useState } from "react";
import APIService from "../API.services";
import { useSelector, useDispatch } from "react-redux";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Comments from "./Comments";

import classes from "../css/Post.module.css";

const Post = () => {
  const [post, setPost] = useState({});
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getPost() {
      try {
        const res = await APIService.getPost();
        const data = await res.data;
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    }

    async function getComments() {
      try {
        const res = await APIService.getComments();
        const data = await res.data;

        dispatch({
          type: "setComments",
          comments: data,
        });
      } catch (error) {
        console.error(error);
      }
    }
    getPost();
    getComments();
  }, [dispatch]);

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
