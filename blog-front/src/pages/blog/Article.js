import React from "react";
import { Container, Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Article = () => {
  const { id } = useParams(); //string
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProduct();
  });

  useEffect(() => {
    document.title = "post";
  });

  const getProduct = () => {
    axios
      .get("https://127.0.0.1:8000/api/posts")
      .then((res) => {
        let allPosts = res.data;
        const newProduct = allPosts.find((item) => item.id === parseInt(id));
        setProduct(newProduct);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Box>
        <Box display="flex" alignItems="center" p={2}>
          <Avatar
            alt="Remy Sharp"
            src={product.imageUrl}
            sx={{ width: 56, height: 56, margin: 2 }}
          />
          <Typography color="#777" fontSize="medium" marginRight={1.5}>
            {product.createBy}
          </Typography>
          <Typography
            color="#777"
            sx={{ fontSize: { xs: "11px", md: "15px" } }}
          >
            {product.createAt}
          </Typography>
        </Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ fontSize: { xs: "20px", md: "25px" } }}
          marginBottom={4}
        >
          {product.titre}
        </Typography>
        <Box textAlign="center" marginBottom={5}>
          <img
            src={product.imageUrl}
            alt="imagetitle"
            style={{
              width: "100%",
              maxHeight: "80vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Box>
        <Typography
          textAlign="justify"
          lineHeight="2"
          color="#616161"
          sx={{ fontSize: { xs: "17px", md: "19px" } }}
          maxWidth="80%"
          margin="auto"
          marginBottom={10}
        >
          {product.contenu}
        </Typography>
        <Box
          borderBottom={1}
          pb={1}
          marginBottom={2}
          fontSize={"1.rem"}
          paddingBottom={"2rem"}
          textAlign={"left"}
          fontWeight={"bold"}
        >
          Commentaires
        </Box>
        <Box sx={{ borderBottom: ".5px solid #ede6e6" }}>
          <Box display="flex" alignItems="center" p={1}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 40, height: 40, margin: 2 }}
            />
            <Typography color="#777" fontSize="medium" marginRight={1.5}>
              UserName
            </Typography>
            <Typography color="#777" fontSize="small">
              19 Octobre, 2020
            </Typography>
          </Box>
          <Typography
            pl={8}
            fontSize={15}
            color="#555"
            maxWidth="70%"
            marginBottom={2}
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vel id
            facere iste, alias quo ea voluptatum, ipsa amet quos labore tenetur
            voluptatibus enim eaque. Maiores impedit reiciendis iure explicabo?
            ...
          </Typography>
        </Box>
        <Box sx={{ borderBottom: ".5px solid #ede6e6" }}>
          <Box display="flex" alignItems="center" p={1}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 40, height: 40, margin: 2 }}
            />
            <Typography color="#777" fontSize="medium" marginRight={1.5}>
              UserName
            </Typography>
            <Typography color="#777" fontSize="small">
              19 Octobre, 2020
            </Typography>
          </Box>
          <Typography
            pl={8}
            fontSize={15}
            color="#555"
            maxWidth="70%"
            marginBottom={2}
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vel id
            facere iste, alias quo ea voluptatum, ipsa amet quos labore tenetur
            voluptatibus enim eaque. Maiores impedit reiciendis iure explicabo?
            ...
          </Typography>
        </Box>
        <Box sx={{ borderBottom: ".5px solid #ede6e6" }}>
          <Box display="flex" alignItems="center" p={1}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 40, height: 40, margin: 2 }}
            />
            <Typography color="#777" fontSize="medium" marginRight={1.5}>
              UserName
            </Typography>
            <Typography color="#777" fontSize="small">
              19 Octobre, 2020
            </Typography>
          </Box>
          <Typography
            pl={8}
            fontSize={15}
            color="#555"
            maxWidth="70%"
            marginBottom={2}
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vel id
            facere iste, alias quo ea voluptatum, ipsa amet quos labore tenetur
            voluptatibus enim eaque. Maiores impedit reiciendis iure explicabo?
            ...
          </Typography>
        </Box>
        <Box sx={{ borderBottom: ".5px solid #ede6e6" }}>
          <Box display="flex" alignItems="center" p={1}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 40, height: 40, margin: 2 }}
            />
            <Typography color="#777" fontSize="medium" marginRight={1.5}>
              UserName
            </Typography>
            <Typography color="#777" fontSize="small">
              19 Octobre, 2020
            </Typography>
          </Box>
          <Typography
            pl={8}
            fontSize={15}
            color="#555"
            maxWidth="70%"
            marginBottom={2}
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vel id
            facere iste, alias quo ea voluptatum, ipsa amet quos labore tenetur
            voluptatibus enim eaque. Maiores impedit reiciendis iure explicabo?
            ...
          </Typography>
        </Box>
        <Button size="lg" disabled="flex">
          Plus
        </Button>
        <Box
          sx={{
            py: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Textarea
              placeholder="Try to submit with empty text!"
              required
              sx={{ mb: 1, width: "800px", minHeight: "200px", mt: 7 }}
            />
            <Button
              type="submit"
              sx={{
                mb: 1,
                background: "#1b99d5",
                color: "white",
                margin: "20px 0 90px 0",

                "&:hover": {
                  color: "#1b99d5",
                },
              }}
            >
              Submit
            </Button>
          </form> */}
        </Box>
      </Box>
    </Container>
  );
};

export default Article;
