/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { makeStyles } from "@mui/styles";
import CartIcon from "../images/icon-cart.svg";
import { styled } from "@mui/styles";
import "./nav.css";
import Logo from "../images/logo.svg";
import { useState } from "react";
import { BootstrapDialogTitle } from "./Dialog";
import {
  Typography,
  Dialog,
  DialogContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { removeOrderItem } from "../ordersSlice";
import Avatar from "../images/image-avatar.png";

const Header = styled("nav")({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  height: "20px",
  boxShadow: "0 10px 30px rgb(0 0 0 / 10%)",
});
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const useStyles = makeStyles((theme) => ({
  background: theme.palette.primary.main,
  headerSect: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Kumbh Sans, sans-serif",
    width: "50%",
    alignItems: "baseline",
    [theme.breakpoints.down("sm")]: {
      width: "140px",
      alignItems: "center",
    },
  },
  lastHeaderSect: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Kumbh Sans, sans-serif",
    width: "100px",
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
    fontFamily: "Kumbh Sans, sans-serif",
    fontWeight: 700,
    fontSize: "15px",
    opacity: 0.75,
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
  logo: {
    fontWeight: 700,
    color: "#1D2025",
    fontSize: "20px",
  },
  cartItems: {
    display: "flex",
    marginBottom: theme.spacing(2),
    color: "#68707D",
    fontWeight: 700,
    justifyContent: "space-between",
  },
  itemDetails: {
    flexDirection: "column",
  },
  checkout: {
    background: "#FF7D1A",
    padding: theme.spacing(1),
    borderRadius: "7px",
    width: "80%",
    border: "none",
    fontWeight: 700,
    color: "#FFF",
    fontSize: 20,
    margin: "auto",
  },
  orderCount: {
    position: "relative",
    right: "30px",
    bottom: "8px",
    fontWeight: 700,
    background: "#FF7D1A",
    opacity: 1,
    color: "#FFF",
    borderRadius: "50%",
    width: "15px",
    height: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "10px",
  },
  noOrderCount: {
    position: "relative",
    right: "30px",
    bottom: "8px",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const { totalOrders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const handleDelete = (item) => {
    dispatch(removeOrderItem(item));
  };
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
                <a href="" className={classes.toggleDivLink}>
                  <li>Men</li>
                </a>
                <a href="#" className={classes.toggleDivLink}>
                  <li>Women</li>
                </a>
                <a href="#" className={classes.toggleDivLink}>
                  <li>About</li>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className={classes.toggleDivLink}
                  rel="noreferrer"
                >
                  <li>Contact</li>
                </a>
              </ul>
            </div>{" "}
            <img src={Logo} alt="company logo" width={100} />
          </div>
        ) : (
          <div className={classes.headerSect}>
            <img src={Logo} alt="company logo" width={100} />
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
              <a href="#" className={classes.toggleDivLink}>
                <li>Contact</li>
              </a>
            </ul>
          </div>
        )}

        <div className={classes.lastHeaderSect}>
          <img src={CartIcon} alt="cart icon" onClick={handleClickOpen} />
          <span
            className={
              totalOrders.length > 0 ? classes.orderCount : classes.noOrderCount
            }
          >
            {totalOrders.length > 0 ? totalOrders.length : null}
          </span>
          <img src={Avatar} alt=" user avatar" />
        </div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Cart
          </BootstrapDialogTitle>
          <DialogContent dividers>
            {!totalOrders.length ? (
              <Typography gutterBottom>Your cart is Empty!</Typography>
            ) : (
              <>
                {totalOrders.map((item) => (
                  <div className={classes.cartItems}>
                    <img src={item.imageUrl} alt="item " width={70} />
                    <div className={classes.itemDetails}>
                      <Typography gutterBottom>{item.name}</Typography>
                      <Typography gutterBottom>
                        {item.itemPrice}*{item.counter} ={" "}
                        <span style={{ color: "black", fontWeight: 900 }}>
                          {item.itemPrice * item.counter}
                        </span>
                      </Typography>
                    </div>
                    <DeleteOutlineIcon onClick={() => handleDelete(item)} />
                  </div>
                ))}
                <button className={classes.checkout}>Checkout</button>
              </>
            )}
          </DialogContent>
        </BootstrapDialog>
      </Header>
    </>
  );
};

export default Navbar;
