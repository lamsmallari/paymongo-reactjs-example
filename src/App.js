import React, { useState, useEffect } from "react";
import paymongo from "./services/paymongo";
import _ from "lodash";

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
  const [cartTotal, setCartTotal] = useState();
  const [paymentTransitionDelay, setPaymentTransitiondDelay] = useState(false);
  const [orderCompleteData, setOrderCompleteData] = useState(null);

  const [billingInfo, setBillingInfo] = useState({
    number: "4123450131000508",
    exp_month: 12,
    exp_year: 25,
    cvc: "111",
    line1: "blk 1 lot 1 address example",
    city: "Biñan",
    state: "Laguna",
    country: "PH",
    postal_code: "4024",
    name: "John",
    email: "johnmail@gmail.com",
    phone: "09988909890"
  });

  useEffect(() => {
    let transition = false;

    if (paymentTransitionDelay) {
      transition = setTimeout(() => {
        transition = false;
        setPaymentTransitiondDelay(false);
      }, 5000);
    }

    return () => {
      if (transition) {
        clearTimeout(transition);
      }
    };
  }, [paymentTransitionDelay]);

  const handlePayment = event => {
    event.preventDefault();

    const {
      number,
      exp_month,
      exp_year,
      cvc,
      line1,
      city,
      state,
      country,
      postal_code,
      name,
      email,
      phone
    } = billingInfo;

    const paymongoTokenData = {
      data: {
        attributes: {
          number,
          exp_month: parseInt(exp_month),
          exp_year: parseInt(exp_year),
          cvc,
          billing: {
            name,
            email,
            phone,
            address: {
              line1,
              city,
              state,
              country,
              postal_code
            }
          }
        }
      }
    };

    const amount = parseInt(
      cartTotal
        .toFixed(2)
        .toString()
        .replace(".", "")
    );

    const paymongoPaymentData = (tokenId, tokenType) => {
      return {
        data: {
          attributes: {
            amount,
            currency: "PHP",
            source: {
              id: tokenId,
              type: tokenType
            }
          }
        }
      };
    };

    setPaymentTransitiondDelay(true);

    paymongo
      .createToken(paymongoTokenData)
      .then(result => {
        const tokenId = result.data.id;
        const tokenType = result.data.type;

        paymongo
          .createPayment(paymongoPaymentData(tokenId, tokenType))
          .then(data => {
            setOrderCompleteData(data);
            setCart([]);
            setCartTotal(null);
          })
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

  const handleFieldChange = event => {
    const { name, value } = event.target;

    setBillingInfo({ ...billingInfo, [name]: value });
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

    const total = cartData.reduce((acc, curr) => acc + curr.subTotal, 0);
    setCartTotal(total);

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

    const total = cartData.reduce((acc, curr) => acc + curr.subTotal, 0);
    setCartTotal(total);

    setCart(cartData);
  };

  const handRemoveFromCart = itemId => {
    let cartData = [...cart];
    cartData = _.filter(cartData, item => item.id !== itemId);

    setCart(cartData);
  };

  const handleConfirm = () => {
    setIndex(0);
    setOrderCompleteData(null);
  };

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />

        <Container component="main" className={classes.main} maxWidth="sm">
          {index === 0 && <Products handleAddToCart={handleAddToCart} />}
          {index === 1 && (
            <Cart
              cart={cart}
              cartTotal={cartTotal}
              handleCartQuantity={handleCartQuantity}
              handRemoveFromCart={handRemoveFromCart}
              setIndex={setIndex}
            />
          )}
          {index === 2 && (
            <Checkout
              cart={cart}
              cartTotal={cartTotal}
              handlePayment={handlePayment}
              handleFieldChange={handleFieldChange}
              billingInfo={billingInfo}
              orderCompleteData={orderCompleteData}
              handleConfirm={handleConfirm}
              paymentTransitionDelay={paymentTransitionDelay}
            />
          )}
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
