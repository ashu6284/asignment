import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { PeopleAltOutlined } from "@mui/icons-material";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Card1 from "../cards/card1/Card1";
import Card2 from "../cards/card2/Card2";
import DialogBox from "../dialogbox/DialogBox";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";
const drawerWidth = 240;

function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3331/data");
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <div className="sidebar-top">
        <img src={require("../images/school-logo.jpg")} alt="school" />
        <span>School Name</span>
      </div>
      <List sx={{ color: "#97a89c", marginTop: "50px" }}>
        {[
          "Dashboard",
          "Teach",
          "Test",
          "Take Class",
          "Video Library",
          "Doubts",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#97a89c" }}>
                {(() => {
                  if (index === 0) {
                    return (
                      <Link to="/test" className="link">
                        <HomeOutlinedIcon />
                      </Link>
                    );
                  } else if (index === 1) {
                    return (
                      <Link to="/test" className="link">
                        <PeopleAltOutlined />
                      </Link>
                    );
                  } else if (index === 2) {
                    return (
                      <Link to="/test" className="link">
                        <ReceiptOutlinedIcon />
                      </Link>
                    );
                  } else if (index === 3) {
                    return (
                      <Link to="/test" className="link">
                        <VideocamOutlinedIcon />;
                      </Link>
                    );
                  } else if (index === 4) {
                    return (
                      <Link to="/test" className="link">
                        <LocalLibraryOutlinedIcon />
                      </Link>
                    );
                  } else {
                    return (
                      <Link to="/test" className="link">
                        <ContactSupportOutlinedIcon />
                      </Link>
                    );
                  }
                })()}
              </ListItemIcon>

              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className="divider"></div>
      <div className="navbar-bottom">
        <div className="navbar-bottom-icon">
          <p className="navbar-bottom-icon-txt">PM</p>
        </div>
        <div className="navbar-bottom-txt">Priyanshi Mandaloi</div>
      </div>
    </div>
  );

  return (
    <Box sx={{ display: "flex", backgroundColor: "" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>

          <ArrowBackIosNewOutlinedIcon
            sx={{ color: "black", marginRight: "23px" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "black" }}
          >
            Chapter Name
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div className="card-container">
          <Card1 />
          <Card2 />
        </div>

        <div>
          <DialogBox />
        </div>

        <div className="text-field">
          {data.map((item) => (
            <p
              key={item.id}
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></p>
          ))}
        </div>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
