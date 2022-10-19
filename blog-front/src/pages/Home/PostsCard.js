import React from "react";
import CardPost from "../../component/CardPost";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";

import SliderItems from "../../component/SliderItems";
import Footer from "../../component/Footer";
const PostsCard = () => {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <div>
      <SliderItems />
      <Container>
        <Grid container spacing={4} width={"100%"} margin={"auto"}>
          <CardPost />
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default PostsCard;
