/* eslint-disable no-sequences */
import ImageGallery from "react-image-gallery";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { allOrders } from "../ordersSlice";
import productOneThumbnail from "../images/image-product-1-thumbnail.jpg";
import productTwoThumbnail from "../images/image-product-2-thumbnail.jpg";
import productThreeThumbnail from "../images/image-product-3-thumbnail.jpg";
import productFourThumbnail from "../images/image-product-4-thumbnail.jpg";
import productOne from "../images/image-product-1.jpg";
import productTwo from "../images/image-product-2.jpg";
import productThree from "../images/image-product-3.jpg";
import productFour from "../images/image-product-4.jpg";
import "./home.css";

const useStyles = makeStyles((theme) => ({
  homeContent: {
    padding: theme.spacing(3),
    width: "100vw",
    "& -webkit-box-sizing": "border-box",
    "-moz-box-sizing": "border-box",
    boxSizing: "border-box ",
  },
  addButton: {
    background: "#F7F8FD",
    padding: theme.spacing(2),
    borderRadius: "7px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      marginBottom: theme.spacing(3),
    },
    marginBottom: 0,
    width: "35%",
  },
  addToCart: {
    background: "#FF7D1A",
    padding: theme.spacing(1.5),
    borderRadius: "7px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      padding: theme.spacing(2),
    },
    border: "none",
    fontWeight: 700,
    color: "#FFF",
    fontSize: 20,
    width: "50%",
  },
  price: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
      height: "60px",
    },
  },
  sign: {
    color: "#FF7D1A",
    fontWeight: 700,
  },
  prevPrice: {
    textDecoration: "line-through ",
    fontWeight: 700,
    color: "#B6BCC8",
  },
  discount: {
    background: "#FFEDE0",
    padding: theme.spacing(1),
    fontWeight: 700,
  },
  currentPrice: {
    fontWeight: 700,
    marginRight: theme.spacing(2),
  },
  comp: {
    color: "#FF7D1A",
  },
  heading: {
    fontSize: 27,
  },
  home: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      width: "90%",
      margin: "auto",
      alignItems: "center",
    },
  },
  addButtons: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      width: "90%",
      margin: "auto",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
}));

const images = [
  {
    name: "Fall Limited Edition Snickers",
    id: 1,
    price: 350,
    discount: 50,
    original: productOne,
    thumbnail: productOneThumbnail,
  },
  {
    name: "Fall Limited Edition Snickers 2",
    id: 2,
    price: 250,
    discount: 40,
    original: productTwo,
    thumbnail: productTwoThumbnail,
  },
  {
    name: "Fall Limited Edition Snickers 3",
    id: 3,
    price: 500,
    discount: 20,
    original: productThree,
    thumbnail: productThreeThumbnail,
  },
  {
    name: "Fall Limited Edition Snickers 4",
    id: 4,
    price: 500,
    discount: 33,
    original: productFour,
    thumbnail: productFourThumbnail,
  },
];

const HomePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [counter, setCounter] = useState(0);
  const [indx, setIndex] = useState(0);
  const dispatch = useDispatch();

  const handleClick = (sign) => {
    if (sign === "-") {
      setCounter(counter - 1);
    } else if (sign === "+") {
      setCounter(counter + 1);
    }
  };
  const [itemDisplayed, setItemDisplayed] = useState(images[0]);
  const renderCustomControls = () => (
    setIndex(refImg?.current?.getCurrentIndex()),
    setItemDisplayed(
      images.filter(function (arr) {
        return arr.id === indx + 1;
      })[0]
    )
  );
  let currentPrice =
    ((100 - itemDisplayed?.discount) / 100) * itemDisplayed?.price;
  const order = {
    counter: counter,
    itemPrice: currentPrice,
    imageUrl: itemDisplayed?.original,
    name: itemDisplayed?.name,
    id: itemDisplayed?.id,
  };
  const handleAddToCart = () => {
    dispatch(allOrders(order));
    setCounter(0);
  };
  const refImg = useRef(null);

  return (
    <div className={classes.home}>
      <ImageGallery
        items={images}
        showThumbnails={mobile ? false : true}
        showFullscreenButton={false}
        showPlayButton={false}
        additionalClass="image-container"
        ref={refImg}
        renderCustomControls={renderCustomControls}
      />
      <div className={classes.homeContent}>
        <h3 className={classes.comp}>SNEAKER COMPANY</h3>
        <div>
          <h4 className={classes.heading}>{itemDisplayed?.name}</h4>
          <p>
            These low-profile sneakers are your perfect casual wear company.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div>
            <div className={classes.price}>
              <div>
                <span className={classes.currentPrice}>
                  ${counter < 1 ? currentPrice : currentPrice * counter}
                </span>
                <span className={classes.discount}>
                  {itemDisplayed?.discount}%
                </span>
              </div>

              <span className={classes.prevPrice}>${itemDisplayed?.price}</span>
            </div>
            <div className={classes.addButtons}>
              <div className={classes.addButton}>
                <span onClick={() => handleClick("-")} className={classes.sign}>
                  -
                </span>
                <span>{counter}</span>

                <span className={classes.sign} onClick={() => handleClick("+")}>
                  +
                </span>
              </div>
              <button className={classes.addToCart} onClick={handleAddToCart}>
                <ShoppingCartIcon style={{ marginRight: theme.spacing(2) }} />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
