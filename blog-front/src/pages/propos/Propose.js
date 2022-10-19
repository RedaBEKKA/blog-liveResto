import React from "react";
import {
  Avatar,
  Badge,
  Box,
  CardMedia,
  Container,
  styled,
} from "@mui/material";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Footer from "./../../component/Footer";
import ContactUs from "../../component/ContactUs";
import { useEffect } from "react";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));
const Propose = () => {
  useEffect(() => {
    document.title = "props de nous";
  });
  return (
    <>
      <Container>
        <Box mt={7} mb={10}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", marginBottom: "10px" }}
            fontSize={{ xs: 38, sm: 40 }}
            pb={{ xs: 5 }}
          >
            Qui sommes-nous ?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginBottom: "10px",
              color: "#2274A5",

              margin: "auto",
              fontWeight: "bold",
            }}
            fontSize={{ xs: 18, sm: 20 }}
            width={{ xs: "90%", sm: "50%" }}
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
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box
            sx={{
              textAlign: "justify",
            }}
            width={{ xs: "100%", sm: "43%" }}
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
              Nous vivons l’influence et nous comprenons pourquoi ça marche.
              Parce que l’influence c’est avant tout une histoire de relations
              humaines et pas uniquement d’algorithmes.
            </Typography>
            <Typography
              sx={{
                marginBottom: "20px",
              }}
            >
              Nous aimons les influenceurs. Nous aimons nos opérations et nous
              travaillons avec passion. Si nous avons développé le concept de «
              Best Friend Effect » pour parler de l’influence, c’est que nous
              pensons que l’influence est avant tout une relation de confiance
              et de complicité entre la marque, l’influenceur et sa communauté.
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
              marginTop: "50px",
            }}
            width={{ xs: "100%", sm: "40%" }}
            gap={{ xs: "30px", sm: "0" }}
          >
            <CardMedia
              component="img"
              sx={{ height: "250px", margin: "auto" }}
              width={{ xs: "100%", sm: "95%" }}
              src={"https://www.influence4you.com/images/v10/value-img1.jpg"}
            />
            <CardMedia
              component="img"
              sx={{
                display: "flex",

                height: "200px",
              }}
              width={{ xs: "95%", sm: "75%" }}
              marginTop={{ xs: "20px", sm: "-40%" }}
              marginLeft={{ xs: "0", sm: "30%" }}
              src={"https://www.influence4you.com/images/v10/value-img2.jpg"}
            />
            <CardMedia
              component="img"
              sx={{
                height: "150px",
              }}
              width={{ xs: "95%", sm: "50%" }}
              marginTop={{ xs: "20px", sm: "-40%" }}
              marginLeft={{ xs: "0", sm: "30px" }}
              src={"https://www.influence4you.com/images/v10/value-img3.jpg"}
            />
          </Box>
        </Box>

        <Box sx={{ marginBottom: "80px" }}>
          <Typography
            sx={{ fontSize: "35px", fontWeight: "bold", marginBottom: "80px" }}
          >
            Notre équipe
          </Typography>
          <Grid container spacing={8}>
            <Grid item xs={6} md={3}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <SmallAvatar
                    alt="Remy Sharp"
                    src="https://www.influence4you.com/images/v10/flag-icons/fr-flag.png"
                  />
                }
              >
                <Avatar
                  sx={{ width: 150, height: 150 }}
                  alt="Travis Howard"
                  src="https://www.influence4you.com/images/v10/team-square/st-bouillet.jpg"
                />
              </Badge>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}
              >
                Stéphane
              </Typography>
              <Typography
                sx={{ fontSize: "16px", color: "#837474", letterSpacing: "2" }}
              >
                CEO & Partner
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <SmallAvatar
                    alt="Remy Sharp"
                    src="https://www.influence4you.com/images/v10/flag-icons/fr-flag.png"
                  />
                }
              >
                <Avatar
                  sx={{ width: 150, height: 150 }}
                  alt="Travis Howard"
                  src="https://www.influence4you.com/images/v10/team-square/se-bouillet.jpg"
                />
              </Badge>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}
              >
                Sébastien
              </Typography>
              <Typography
                sx={{ fontSize: "16px", color: "#837474", letterSpacing: "2" }}
              >
                Managing Director & Partner
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <SmallAvatar
                    alt="Remy Sharp"
                    src="https://www.influence4you.com/images/v10/flag-icons/fr-flag.png"
                  />
                }
              >
                <Avatar
                  sx={{ width: 150, height: 150 }}
                  alt="Travis Howard"
                  src="https://www.influence4you.com/images/v10/team-square/dupont.jpg"
                />
              </Badge>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}
              >
                Florence
              </Typography>
              <Typography
                sx={{ fontSize: "16px", color: "#837474", letterSpacing: "2" }}
              >
                Deputy General Director & Partner
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <SmallAvatar
                    alt="Remy Sharp"
                    src="https://www.influence4you.com/images/v10/flag-icons/fr-flag.png"
                  />
                }
              >
                <Avatar
                  sx={{ width: 150, height: 150 }}
                  alt="Travis Howard"
                  src="https://www.influence4you.com/images/v10/team-square/balesta.jpg"
                />
              </Badge>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}
              >
                Aurélie
              </Typography>
              <Typography
                sx={{ fontSize: "16px", color: "#837474", letterSpacing: "2" }}
              >
                Head Brand Content Manager France
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <SmallAvatar
                    alt="Remy Sharp"
                    src="https://www.influence4you.com/images/v10/flag-icons/pt-flag.png"
                  />
                }
              >
                <Avatar
                  sx={{ width: 150, height: 150 }}
                  alt="Travis Howard"
                  src="https://www.influence4you.com/images/v10/team-square/luana.jpg"
                />
              </Badge>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}
              >
                Luana
              </Typography>
              <Typography
                sx={{ fontSize: "16px", color: "#837474", letterSpacing: "2" }}
              >
                Brand Content Manager
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <SmallAvatar
                    alt="Remy Sharp"
                    src="https://www.influence4you.com/images/v10/flag-icons/uk-flag.png"
                  />
                }
              >
                <Avatar
                  sx={{ width: 150, height: 150 }}
                  alt="Travis Howard"
                  src="https://www.influence4you.com/images/v10/team-square/eleanor.jpg"
                />
              </Badge>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}
              >
                Eleanor
              </Typography>
              <Typography
                sx={{ fontSize: "16px", color: "#837474", letterSpacing: "2" }}
              >
                Brand Content Manager
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <SmallAvatar
                    alt="Remy Sharp"
                    src="https://www.influence4you.com/images/v10/flag-icons/fr-flag.png"
                  />
                }
              >
                <Avatar
                  sx={{ width: 150, height: 150 }}
                  alt="Travis Howard"
                  src="https://www.influence4you.com/images/v10/team-square/maxime.jpg"
                />
              </Badge>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}
              >
                Maxime
              </Typography>
              <Typography
                sx={{ fontSize: "16px", color: "#837474", letterSpacing: "2" }}
              >
                Brand Content Manager
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <SmallAvatar
                    alt="Remy Sharp"
                    src="https://www.influence4you.com/images/v10/flag-icons/fr-flag.png"
                  />
                }
              >
                <Avatar
                  sx={{ width: 150, height: 150 }}
                  alt="Travis Howard"
                  src="https://www.influence4you.com/images/v10/team-square/yassaman.jpg"
                />
              </Badge>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}
              >
                Yassaman
              </Typography>
              <Typography
                sx={{ fontSize: "16px", color: "#837474", letterSpacing: "2" }}
              >
                Brand Content Manager
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Propose;
