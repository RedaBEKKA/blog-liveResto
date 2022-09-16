import React from "react";
import { Box, Container } from "@mui/system";
import { Grid } from "@mui/material";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 1, sm: 5 }}
        bgcolor="#233069"
        color="#fff"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} pb={2}>
                Help
              </Box>
              <Box pb={1} pt={1}>
                <Link href="#" color="white" underline="none">
                  Contact
                </Link>
              </Box>
              <Box pb={1}>
                <Link href="#" color="#fff" underline="none">
                  support
                </Link>
              </Box>
              <Box pb={1}>
                <Link href="#" color="#fff" underline="none">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} pb={2}>
                Account
              </Box>
              <Box pb={1} pt={1}>
                <Link href="#" color="#fff" underline="none">
                  Login
                </Link>
              </Box>
              <Box pb={1}>
                <Link href="#" color="#fff" underline="none">
                  Rigister
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} pb={2}>
                Serveces
              </Box>
              <Box pb={1} pt={1}>
                <Link href="#" color="#fff" underline="none">
                  link2
                </Link>
              </Box>
              <Box pb={1}>
                <Link href="#" color="#fff" underline="none">
                  link3
                </Link>
              </Box>
              <Box pb={1}>
                <Link href="#" color="#fff" underline="none">
                  blog
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            textAlign="center"
            pt={{ xs: 5, sm: 2 }}
            pb={{ xs: 5, sm: 0 }}
            display="flex"
            justifyContent="space-between"
            color="#d9cde7"
          >
            <Box>Live Resto &reg; {new Date().getFullYear()}</Box>
            <Box display="flex">
              <Box mr={1}>
                <FacebookIcon />
              </Box>
              <Box mr={1}>
                <InstagramIcon />
              </Box>
              <Box mr={1}>
                <LinkedInIcon />
              </Box>

              <Box>
                <TwitterIcon />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
