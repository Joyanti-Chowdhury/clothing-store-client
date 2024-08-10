"use client";

import {
  Box,
  Button,
  Container,
  Menu,
  MenuProps,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Dashboard from "../../ui/dashboard/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import * as React from "react";

import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Typography variant="h4" component={Link} href={"/"} fontWeight={600}>
          Clothing Store
        </Typography>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/">
            Home
          </Typography>
          <Typography component={Link} href="/products">
            {" "}
            All Products
          </Typography>
          <Typography component={Link} href="/categories">
            {" "}
           Categories
          </Typography>

          {/* <div>
            <Box
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Categories
            </Box>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Kids</MenuItem>
              <MenuItem onClick={handleClose}>Gents</MenuItem>
              <MenuItem onClick={handleClose}>Ladies</MenuItem>
              <MenuItem onClick={handleClose}>Accessories</MenuItem>
            </Menu>
          </div> */}

          <Typography component={Link} href="/flash-sale">
            Flash Sale
          </Typography>
          <Typography component={Link} href="/contact-us">
            Contact us
          </Typography>
          <Typography component={Link} href="/blog">
            Blog
          </Typography>
          <Typography component={Link} href="/dashboard">
            Dashboard
          </Typography>

          <ShoppingCartIcon></ShoppingCartIcon>
        </Stack>
        <Button component={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
