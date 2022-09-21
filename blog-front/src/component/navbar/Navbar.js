import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Menu as MenuIcon,
  Twitter,
} from "@mui/icons-material";
import { positions } from "@mui/system";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SocialBox = styled(Box)({
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
        <SocialBox>
          <Facebook />
          <Instagram />
          <Twitter />
        </SocialBox>
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
            Posts
          </Typography>
          <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
            Propos
          </Typography>
          <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
            Se Connecter
          </Typography>
          <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
            Create Post
          </Typography>
          <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
            Conact US
          </Typography>
        </MenuBox>
        <SearchBox>
          <InputBase placeholder="Search ...." sx={{ color: "white" }} />
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
            <MenuItem>Posts</MenuItem>
            <MenuItem>Propos</MenuItem>
            <MenuItem> Se Connecter</MenuItem>
            <MenuItem> Create Post</MenuItem>
            <MenuItem> Conact US</MenuItem>
          </Box>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
