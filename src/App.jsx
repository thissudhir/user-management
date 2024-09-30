import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {
  return (
    <Router>
      <AppBar
        position="static"
        elevation={0}
        style={{
          width: "1400px",
          minWidth: "1200px",
          backgroundColor: "white",
          color: "green",
        }}
      >
        <Toolbar>
          <Typography
            variant="h3"
            component={Link}
            to="/"
            style={{
              flexGrow: 1,
              textTransform: "none",
              textDecoration: "none",
              color: "green",
            }}
          >
            Manage User
          </Typography>

          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "green" }}
            component={Link}
            to="/add"
          >
            Add User
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<UserForm />} />
          <Route path="/edit/:id" element={<UserForm />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
