import Card from "@mui/material/Card";
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
    <Box marginTop={10}>
      <Grid container spacing={6}>
        {postsData.map((ele, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={ele.id}
              minHeight="250px"
              display={"flex"}
            >
              <Card
                elevation={1}
                sx={{
                  padding: { xs: "0px 5px", sm: "0px 9px", md: "0px" },
                  alignSelf: "normal",
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "normal",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "16px" },
                    textAlign: "center",
                    padding: { md: "16px 7px 0px " },
                  }}
                >
                  {ele.titre.slice(0, 35) + "..."}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "11px", md: "13px" },
                    textAlign: "center",
                    padding: { md: "2px" },
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
                  width="100%"
                  height="200px"
                  objectFit="cover"
                  marginTop="auto"
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
                    {ele.contenu.slice(0, 100) + "..."}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button>
                    <Link
                      to={`/blog/${ele.id}`}
                      style={{ marginTop: "auto", textDecoration: "none" }}
                    >
                      Plus
                    </Link>
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
