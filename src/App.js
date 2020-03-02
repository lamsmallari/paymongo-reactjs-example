import React, { useState } from "react";
import paymongo from "./services/paymongo";
import _ from "lodash";
import dummyData from "./dummyData";

import CssBaseline from "@material-ui/core/CssBaseline";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import FooterNavigation from "./components/FooterNavigation";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#e3e3e3"
    }
  },
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  footer: {
    marginTop: "auto"
  }
}));

function App() {
  const [index, setIndex] = useState(0);
  const [cart, setCart] = useState([]);

  const handlePayment = data => {
    paymongo
      .createToken(data)
      .then(result => {
        const tokenId = result.data.id;
        const tokenType = result.data.type;

        paymongo
          .createPayment(dummyData.predefinedAmount(tokenId, tokenType))
          .then(result => console.log(result))
          .catch(error => {
            const code = error.code;
            const message = error.message;
            console.log(code, message);
          });
      })
      .catch(error => {
        const code = error.code;
        const message = error.message;
        console.log(code, message);
      });
  };

  const handleAddToCart = product => {
    const cartData = [...cart];
    const existingDataIndex = _.findIndex(cartData, { id: product.id });

    if (existingDataIndex >= 0) {
      // 1. if product is already in cart, perform merge
      const productQuantity = cartData[existingDataIndex].quantity + 1;
      const subTotal = cartData[existingDataIndex].price * productQuantity;

      cartData[existingDataIndex] = {
        ...product,
        quantity: productQuantity,
        subTotal: subTotal
      };
    } else {
      // 2. if product is not in the cart, perform add
      cartData.push({
        ...product,
        quantity: 1,
        subTotal: product.price
      });
    }

    setCart(cartData);
  };

  const handleCartQuantity = (itemId, operation) => {
    const cartData = [...cart];
    const itemIndex = _.findIndex(cartData, { id: itemId });

    switch (operation) {
      case "increment":
        cartData[itemIndex].quantity++;
        break;
      case "decrement":
        if (cartData[itemIndex].quantity > 1) {
          cartData[itemIndex].quantity--;
        }
        break;
      default:
        break;
    }

    const price = cartData[itemIndex].price;
    const quantity = cartData[itemIndex].quantity;

    cartData[itemIndex].subTotal = price * quantity;

    setCart(cartData);
  };

  const handRemoveFromCart = itemId => {
    let cartData = [...cart];
    cartData = _.filter(cartData, item => item.id !== itemId);

    setCart(cartData);
  };

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        {/* <button onClick={() => handlePayment(dummyData.predefinedCreditCardData)}>
        Test createToken
      </button> */}

        <Container component="main" className={classes.main} maxWidth="sm">
          {index === 0 && <Products handleAddToCart={handleAddToCart} />}
          {index === 1 && (
            <Cart
              items={cart}
              handleCartQuantity={handleCartQuantity}
              handRemoveFromCart={handRemoveFromCart}
            />
          )}
          {index === 2 && <Checkout />}
        </Container>

        <Container component="footer" className={classes.footer} maxWidth="sm">
          <FooterNavigation
            onChange={setIndex}
            index={index}
            cartCount={cart.length}
          />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
