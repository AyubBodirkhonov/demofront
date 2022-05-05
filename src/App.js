import { Container } from "@mui/material";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import React from "react";

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Navbar handleOpen={handleOpen}/>
      <Container>
        <Sidebar visible={open} handleClose={handleClose}/>
        <Home />
      </Container>
    </>
  );
}

export default App;
