import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import React, { useEffect, useState } from "react";
import { Box, Button, CardActions, Typography } from "@mui/material";
import axios from "axios";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import AppPagination from "./AppPagination";
const CardPost = () => {
  const [postsData, setPostsData] = useState([]);
  const [page, setPage] = useState(9);
  const [numberOfPages, setNumberOfPages] = useState(10);

  const fetchData = () => {
    axios
      .get("https://127.0.0.1:8000/api/posts") //?_page=${page}
      .then((res) => {
        let allPosts = res.data;
        setPostsData(allPosts);
        // setNumberOfPages(res.data.length);
        console.log(allPosts.length, " long");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Grid container spacing={4}>
        {postsData.map((ele, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={ele.id}>
              <Card
                elevation={1}
                sx={{ padding: { xs: "0px 5px", sm: "0px 9px", md: "0px" } }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "22px" },
                    textAlign: "center",
                  }}
                >
                  {ele.titre}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "13px", md: "15px" },
                    textAlign: "center",
                    padding: { md: "5px" },
                    color: "text.secondary",
                    margin: { xs: "10px auto" },
                  }}
                >
                  {ele.createAt}
                </Typography>
                {/* <CardHeader title={ele.titre} subheader={ele.createAt} /> */}
                <CardMedia
                  sx={{ padding: { xs: "0px 5px", sm: "0px 9px", md: "0px" } }}
                  component="img"
                  height="100%"
                  image={ele.imageUrl}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ fontSize: { xs: "15px", sm: "17px" } }}
                  >
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
    </Box>
  );
};

export default CardPost;
