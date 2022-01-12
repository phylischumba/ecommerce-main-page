import ImageGallery from "react-image-gallery";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { allOrders } from "../ordersSlice";

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
    },
    marginBottom: theme.spacing(3),
  },
  addToCart: {
    background: "#FF7D1A",
    padding: theme.spacing(2),
    borderRadius: "7px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    border: "none",
    fontWeight: 700,
    color: "#FFF",
    fontSize: 20,
  },
  price: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  sign: {
    color: "#FF7D1A",
    fontWeight: 700,
  },
  prevPrice: {
    textDecoration: "line-through ",
    fontWeight: 400,
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
}));

const images = [
  {
    name: "Fall Limited Edition Snickers",
    id: 1,
    originalTitle: "Fall Limited Edition Snickers",

    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    name: "Fall Limited Edition Snickers",
    id: 2,
    originalTitle: "Fall Limited Edition Snickers",

    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    name: "Fall Limited Edition Snickers",
    originalTitle: "Fall Limited Edition Snickers",
    id: 3,
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const HomePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  let price = 125.0;
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
  const order = {
    counter: counter,
    itemPrice: price,
    imageUrl: images[0].original,
    name: images[0].name,
  };
  const handleAddToCart = () => {
    dispatch(allOrders(order));
  };
  const refImg = useRef(null);

  const renderCustomControls = () => (
    setIndex(refImg?.current?.getCurrentIndex()),
    (<span id="refSpan">{refImg?.current?.getCurrentIndex()}</span>)
  );
  console.log(indx);

  return (
    <div>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        additionalClass="image-container"
        showIndex={true}
        ref={refImg}
        renderCustomControls={renderCustomControls}
      />
      <div className={classes.homeContent}>
        <h3 className={classes.comp}>SNEAKER COMPANY</h3>
        <div>
          <h4 className={classes.heading}>{images[0].name}</h4>
          <p>
            These low-profile sneakers are your perfect casual wear company.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div>
            <div className={classes.price}>
              <div>
                <span className={classes.currentPrice}>
                  ${counter < 1 ? price : price * counter}
                </span>
                <span className={classes.discount}>50%</span>
              </div>

              <span className={classes.prevPrice}>$250.00</span>
            </div>

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
  );
};

export default HomePage;
