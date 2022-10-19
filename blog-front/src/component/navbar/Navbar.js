import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "./../../images/logo2.png";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const LogoBox = styled(Box)({
    display: "flex",
    gap: 10,
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });

  const [open, setOpen] = useState(false);

  return (
    <AppBar position={"static"}>
      <StyledToolbar>
        <LogoBox width={60} height={"66"}>
          <img src={logo} alt="logo" width={"100%"} borderRadius="50%" />
        </LogoBox>
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/`}
              color="white"
              underline="none"
            >
              Acceuil
            </Link>
          </Typography>
          <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/propos`}
            >
              A propos de nous
            </Link>
          </Typography>
          <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
            <Link style={{ textDecoration: "none", color: "white" }} to={`#`}>
              Aide
            </Link>
          </Typography>
        </MenuBox>
        <SearchBox>
          <Button variant="outlined">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/login`}
            >
              Se Connecter
            </Link>
          </Button>

          <MenuIcon
            sx={{
              color: "white",
              display: { xs: "block", sm: "block", md: "none" },
            }}
            onClick={() => setOpen(!open)}
          />
        </SearchBox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={() => setOpen(!open)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{ top: { xs: 45, sm: 50 } }}
        >
          <Box sx={{ width: { xs: 300 }, height: "75vh" }}>
            <MenuItem>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "12px",
                  marginTop: "12px",
                }}
                to={"/"}
              >
                Acceuil
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "12px",
                }}
                to={`/propos`}
              >
                A propos de nous
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "12px",
                }}
                to={"#"}
              >
                Aide
              </Link>
            </MenuItem>
          </Box>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
