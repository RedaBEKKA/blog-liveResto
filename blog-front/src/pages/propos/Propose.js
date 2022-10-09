import React from "react";
import { Avatar, Badge, Box, CardMedia, Container } from "@mui/material";
import { Typography } from "@mui/material";

const Propose = () => {
  return (
    <Container>
      <Box mt={7} mb={10}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", marginBottom: "10px" }}
        >
          Qui sommes-nous ?
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "20px",
            marginBottom: "10px",
            color: "#2274A5",
            maxWidth: "50%",
            margin: "auto",
            fontWeight: "bold",
          }}
        >
          Des professionels passionnés. 29 ans de moyenne d’âge et experts de
          l’influence depuis plus de 9 ans.
        </Typography>
      </Box>

      <CardMedia
        component="img"
        sx={{
          marginBottom: "40px",
          maxWidth: "100%",
        }}
        src={"https://www.influence4you.com/images/v10/who-we-banner.jpg"}
      />

      <Box
        sx={{
          width: "100%",
          margin: "auto",
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "120px",
          marginBottom: "120px",
        }}
      >
        <Box
          sx={{
            width: "43%",
            textAlign: "justify",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              marginBottom: "30px",
            }}
            variant="h5"
          >
            NOS VALEURS
          </Typography>
          <Typography
            sx={{
              marginBottom: "20px",
              textAlign: "justify",
            }}
          >
            Nous vivons l’influence et nous comprenons pourquoi ça marche. Parce
            que l’influence c’est avant tout une histoire de relations humaines
            et pas uniquement d’algorithmes.
          </Typography>
          <Typography
            sx={{
              marginBottom: "20px",
            }}
          >
            Nous aimons les influenceurs. Nous aimons nos opérations et nous
            travaillons avec passion. Si nous avons développé le concept de «
            Best Friend Effect » pour parler de l’influence, c’est que nous
            pensons que l’influence est avant tout une relation de confiance et
            de complicité entre la marque, l’influenceur et sa communauté.
          </Typography>
          <Typography
            sx={{
              marginBottom: "20px",
            }}
          >
            De l’écoute, du respect, mais aussi de l’expertise et du
            professionnalisme, telles sont les valeurs auxquelles nous sommes
            attachés.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
          }}
        >
          <CardMedia
            component="img"
            sx={{ height: "250px", width: "95%", margin: "auto" }}
            src={"https://www.influence4you.com/images/v10/who-we-banner.jpg"}
          />
          <CardMedia
            component="img"
            sx={{
              width: "75%",
              display: "flex",
              marginTop: "-40px",
              marginLeft: "30%",
              height: "200px",
            }}
            src={"https://www.influence4you.com/images/v10/who-we-banner.jpg"}
          />
          <CardMedia
            component="img"
            sx={{
              width: "50%",
              height: "150px",
              marginLeft: "30px",
              marginTop: "-40px",
            }}
            src={"https://www.influence4you.com/images/v10/who-we-banner.jpg"}
          />
        </Box>
      </Box>

      <Box>
        <Typography>Notre équipe</Typography>
        <Box>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Badge>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            }
          >
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </Badge>
        </Box>
      </Box>
    </Container>
  );
};

export default Propose;
