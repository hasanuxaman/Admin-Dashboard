import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      {/* Space below navbar */}
      <Toolbar />

      <List>

        {/* Dashboard */}
        <ListItem button component={Link} to="/">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        {/* Users */}
        <ListItem button component={Link} to="/users">
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>

        {/* Entry Page (Add Photo/Video) */}
        <ListItem button component={Link} to="/entry">
          <ListItemIcon><AddPhotoAlternateIcon /></ListItemIcon>
          <ListItemText primary="Add Photo / Video" />
        </ListItem>

        {/* Slideshow Page */}
        <ListItem button component={Link} to="/slideshow">
          <ListItemIcon><SlideshowIcon /></ListItemIcon>
          <ListItemText primary="Slideshow" />
        </ListItem>

      </List>
    </Drawer>
  );
};

export default Sidebar;
