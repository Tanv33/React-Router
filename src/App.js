import "./App.css";
import React from "react";
import {
  Switch,
  Route,
  useHistory,
  // Link
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const history = useHistory();
  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{ backgroundColor: "transparent" }}
            elevation={0}
          >
            <Toolbar
              variant="dense"
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "20px",
              }}
            >
              <Typography
                variant="h6"
                color="inherit"
                component="div"
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/")}
              >
                Home
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                component="div"
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/about")}
              >
                About
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                component="div"
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/contact")}
              >
                Contact
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </div>

      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
