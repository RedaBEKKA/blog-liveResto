import React from "react";
import CardPost from "../../component/CardPost";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import AppPagination from "../../component/AppPagination";

import SliderItems from "../../component/SliderItems";
const PostsCard = () => {
  return (
    <div>
      <SliderItems />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <CardPost />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardPost />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardPost />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardPost />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardPost />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardPost />
          </Grid>
        </Grid>
        <AppPagination />
      </Container>
    </div>
  );
};

export default PostsCard;
