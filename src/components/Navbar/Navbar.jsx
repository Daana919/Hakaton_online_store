import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// custom
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useCart } from "../../contexts/CartContextProvider";
import "../../styles/Navbar.css";

const pages = [
  {
    type: "Products",
    path: "/products",
  },
  {
    type: "Admin",
    path: "/admin",
  },
];
const settings = [
  {
    type: "Register",
    path: "/register",
  },
  {
    type: "Login",
    path: "/login",
  },
];

const styles = {
  appBar: {
    backgroundColor: "#a8741a",
    fontFamily: "Roboto",
    fontWeight: 700,
    letterSpacing: "0.1rem",
    height: "60px",
    boxShadow: "none",
    background: "transparent",
    position: "relative",
    zIndex: "2",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "1.5rem",
    color: "#fff",
    cursor: "pointer",
  },
};

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // custom
  const navigate = useNavigate();
  const { logout, user, checkAuth } = useAuth();
  const { cartLength } = useCart();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  return (
      <div className="navbar">
        <AppBar
          position="static"
          style={styles.appBar}
        >
          <Container maxWidth="ml">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="#aca190"
                  style={{ color: "#625c52" }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page.type}
                      onClick={handleCloseNavMenu}
                      style={{
                        backgroundColor: "#f8f8f8",
                        fontFamily: "Chakra Petch",
                      }}
                    >
                      <Typography
                        onClick={() => navigate(page.path)}
                        textAlign="center"
                      >
                        {page.type}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
                <Box className="logo_design__adaptive">
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    onClick={() => navigate("/")}
                    sx={{
                      mr: 2,
                      display: { xs: "flex", md: "none" },
                      flexGrow: 1,
                    }}
                  >
                    TIMESCULPT
                  </Typography>
                  <span>
                    <i>Craft Your Time</i>
                  </span>
                </Box>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page.type}
                    onClick={() => {
                      navigate(page.path);
                    }}
                    sx={{
                      my: 2,
                      display: "block",
                      fontFamily: "Chakra Petch",
                      color: "#625c52",
                      fontWeight: "600",
                    }}
                  >
                    {page.type}
                  </Button>
                ))}

                <Box className="logo_design" sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontWeight: 900,
                      letterSpacing: ".3rem",
                    }}
                    onClick={() => navigate("/")}
                  >
                    TIMESCULPT
                  </Typography>
                  <span>
                    <i>Craft Your Time</i>
                  </span>
                </Box>
              </Box>

              {/* Cart, SavedItems, Account  */}
              <Box sx={{ flexGrow: 0 }} className="navbar_acc-like-cart">
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={() => navigate("/cart")}
                >
                  <Badge badgeContent={cartLength} color="error">
                    <LocalMallOutlinedIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={() => navigate("/like")}
                >
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton>
                  <Tooltip title="Account">
                    <AccountCircleOutlinedIcon
                      onClick={handleOpenUserMenu}
                      sx={{ p: 0, width: "30px", height: "30px" }}
                      variant="outlined"
                    >
                      <Avatar alt={user} src="..." />
                    </AccountCircleOutlinedIcon>
                  </Tooltip>
                </IconButton>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting.type} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => navigate(setting.path)}
                        sx={{ fontFamily: "Chakra Petch" }}
                      >
                        {setting.type}
                      </Typography>
                    </MenuItem>
                  ))}
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={logout}
                      sx={{ fontFamily: "Chakra Petch" }}
                    >
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
              {/* end of box */}
            </Toolbar>
          </Container>
        </AppBar>
      </div>
  );
}
export default ResponsiveAppBar;
