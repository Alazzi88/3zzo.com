import * as React from "react";
import   './Appbar.css'
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, ListItemIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Home,
  PhoneCallbackRounded,
} from "@mui/icons-material";

function AppBarr(props) {
  const navigate = useNavigate();

  const drawerWidth = 240;
  // const navItems = ["Home", "Projects", "Contact"];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box  onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h5"
        sx={{ my: 0, background: "#080808", color: "#fff", height: "75px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          EZZO{" "}
          <Avatar
            src="/img/logo.png"
            alt="logo"
            sx={{ width: "54px", height: "54px" }}
          />
        </div>
        
      </Typography>
      <Divider />
      <List>
      
        <ListItem >
          <ListItemButton sx={{p:"0"}}
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>


        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/contact");
            }}
          >
            <ListItemIcon>
              <PhoneCallbackRounded />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "#080808" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between ",
              }}
            >
              EZZO{" "}
              <Avatar
                src="/img/logo.png"
                alt="logo"
                sx={{
                  mr: "40%",
                  margin: "10px 40%",
                  width: "54px",
                  height: "54px",
                }}
              />
            </div>
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                justifyContent: "space-between",
              },
            }}
          >
      
            <p className="nav"
              onClick={() => {
                navigate("/");
              }}
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                cursor: "pointer",
              }}
            >
              Home
            </p>
          
            <p className="nav"
              onClick={() => {
                navigate("/contact");
              }}
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                cursor: "pointer",
              }}
            >
              Contact
            </p>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

AppBarr.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AppBarr;
