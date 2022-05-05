import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  styled
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { DomainAdd } from "@mui/icons-material";

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
const Navbar = ({handleOpen}) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon 
              onClick={() => handleOpen(true)}
               sx={{ display: { xs: "block", sm: "block", md: "none" } }} 
               
               />
            </IconButton>
            <Typography variant="h6" component="div" sx={{fontSize:{xs:"16px", sm:"26px"}, }}>
              CAPA 파트너스
            </Typography>
            <Stack direction="row" gap={5} mr={5} alignItems="center" sx={{display: {xs:"none"}}}>
              <Stack direction="row">
              <DomainAdd fontSize="12px" />
                <Typography sx={{ fontSize: "14px", lineHeight: "20px", marginLeft: "8px" }}>
                  A 가공 업체
                </Typography>
              </Stack>

              <hr
                style={{
                  height: "16px",
                  backgroundColor: "rgba(255,255,255,1)",
                  border: "0.1px solid white",
                }}
              />
              <Typography
                color="inherit"
                sx={{ fontSize: "14px", lineHeight: "20px" }}
              >
                로그아웃
              </Typography>
            </Stack>
          </Toolbar>
        </AppBar>
        <DrawerHeader/>
      </Box>
    </>
  );
};

export default Navbar;
