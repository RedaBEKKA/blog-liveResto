import React from "react";
import CardPost from "../../component/CardPost";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import SliderItems from "../../component/SliderItems";
import Footer from "../../component/Footer";
const PostsCard = () => {
  return (
    <div>
      <SliderItems />
      <Container>
        <Grid container spacing={4}>
          <CardPost />
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default PostsCard;
