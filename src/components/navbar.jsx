import * as React from "react";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "../images/icon-menu.svg";
import CartIcon from "../images/icon-cart.svg";
import { styled } from "@mui/styles";
import PersonIcon from "@mui/icons-material/Person";
import "./nav.css";

const Header = styled("nav")({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  height: "20px",
});

const useStyles = makeStyles((theme) => ({
  background: theme.palette.primary.main,

  headerSect: {
    display: "flex",
    width: "100px",
    justifyContent: "space-between",
  },
  toggleDiv: {
    display: "block",
    zIndex: 1,
    userSelect: "none",
  },
  input: {
    display: "block",
    width: "40px",
    height: "32px",
    position: "absolute",
    top: "-7px",
    left: "-5px",
    cursor: "pointer",
    opacity: 0,
    zIndex: 2,
  },
  toggleDivLink: {
    textDecoration: "none",
    color: "#000",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "tomato",
    },
  },
  span: {
    display: "block",
    width: "33px",
    height: "4px",
    marginBottom: "5px",
    position: "relative",
    background: "#cdcdcd",
    borderRadius: "3px",
    zIndex: 1,
    transformOrigin: "4px 0px",
    transition:
      "transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Header>
        {mobile ? (
          <div className={classes.headerSect}>
            <div className={classes.toggleDiv} id="menuToggle">
              <input type="checkbox" className={classes.input} />

              <span className={classes.span}></span>
              <span className={classes.span}></span>
              <span className={classes.span}></span>

              <ul id="menu">
                <a href="#" className={classes.toggleDivLink}>
                  <li>Collections</li>
                </a>
                <a href="#" className={classes.toggleDivLink}>
                  <li>Men</li>
                </a>
                <a href="#" className={classes.toggleDivLink}>
                  <li>Women</li>
                </a>
                <a href="#" className={classes.toggleDivLink}>
                  <li>About</li>
                </a>
                <a href="#" target="_blank" className={classes.toggleDivLink}>
                  <li>Contact</li>
                </a>
              </ul>
            </div>{" "}
            <span className={classes.logo}>sneakers</span>
          </div>
        ) : (
          <div className={classes.headerSect}>
            <span className={classes.logo}>sneakers</span>
            <ul id="menu2">
              <a href="#" className={classes.toggleDivLink}>
                <li>Collections</li>
              </a>
              <a href="#" className={classes.toggleDivLink}>
                <li>Men</li>
              </a>
              <a href="#" className={classes.toggleDivLink}>
                <li>Women</li>
              </a>
              <a href="#" className={classes.toggleDivLink}>
                <li>About</li>
              </a>
              <a href="#" target="_blank" className={classes.toggleDivLink}>
                <li>Contact</li>
              </a>
            </ul>
          </div>
        )}

        <div className={classes.headerSect}>
          <img src={CartIcon} alt="cart icon" />
          <PersonIcon />
        </div>
      </Header>
    </>
  );
};

export default Navbar;
