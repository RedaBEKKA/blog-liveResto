import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import React, { useEffect, useState } from "react";
import { Button, CardActions, Typography } from "@mui/material";
import axios from "axios";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import AppPagination from "./AppPagination";
const CardPost = () => {
  const [postsData, setPostsData] = useState([]);
  const [page, setPage] = useState(9);
  const [numberOfPages, setNumberOfPages] = useState();

  const fetchData = () => {
    axios
      .get(`http://localhost:3500/posts?_page=${page}`)
      .then((res) => {
        let allPosts = res.data;
        setPostsData(allPosts);
        // setNumberOfPages(res.data.length);
        console.log(allPosts.length);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <Grid container spacing={4}>
        {postsData.map((ele, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={ele.id}>
              <Card elevation={1}>
                <CardHeader title={ele.titre} subheader={ele.createAt} />
                <CardMedia
                  component="img"
                  height="200"
                  image={ele.imageUrl}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    {ele.contenu}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button>
                    <Link to={`/blog/${ele.id}`}>Plus</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <AppPagination setPage={setPage} pageNumber={numberOfPages} />
    </div>
  );
};

export default CardPost;
