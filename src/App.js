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
import FooterNavigation from "./components/FooterNavigation";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import SimpleDialog from "./components/SimpleDialog";

const predefinedCreditCardData = {
  data: {
    attributes: {
      number: "4123450131000508",
      exp_month: 12,
      exp_year: 25,
      cvc: "111",
      billing: {
        address: {
          line1: "address",
          city: "Biñan",
          state: "Laguna",
          country: "PH",
          postal_code: "4024"
        },
        name: "John",
        email: "johnmail@gmail.com",
        phone: "09988909890"
      }
    }
  }
};

const predefinedAmount = (tokenId, tokenType) => {
  return {
    data: {
      attributes: {
        amount: 10000,
        currency: "PHP",
        source: {
          id: tokenId,
          type: tokenType
        }
      }
    }
  };
};

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
    marginTop: "auto",
    backgroundColor: "#fff"
  }
}));

function App() {
  const [index, setIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [dialog, setDialog] = useState({ open: false, itemName: "" });
  const [requestDialogCloseTimeOut, setRequestDialogCloseTimeOut] = useState(
    false
  );

  useEffect(() => {
    let dialogCloseDelay = false;

    if (requestDialogCloseTimeOut) {
      dialogCloseDelay = setTimeout(() => {
        dialogCloseDelay = false;
        setRequestDialogCloseTimeOut(false);
        setDialog({ ...dialog, open: false });
      }, 3000);
    }

    return () => {
      if (dialogCloseDelay) {
        clearTimeout(dialogCloseDelay);
      }
    };
  }, [requestDialogCloseTimeOut, setDialog, dialog]);

  const handlePayment = data => {
    paymongo
      .createToken(data)
      .then(result => {
        const tokenId = result.data.id;
        const tokenType = result.data.type;

        paymongo
          .createPayment(predefinedAmount(tokenId, tokenType))
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
      cartData[existingDataIndex] = {
        ...product,
        quantity: cartData[existingDataIndex].quantity + 1
      };
    } else {
      // 2. if product is not in the cart, perform add
      cartData.push({ ...product, quantity: 1 });
    }

    setCart(cartData);
    setDialog({ open: true, itemName: product.title });
    setRequestDialogCloseTimeOut(true);
  };

  const handleDialogClose = () => {
    setDialog({ ...dialog, open: false });
    setRequestDialogCloseTimeOut(false);
  };

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        {/* <button onClick={() => handlePayment(predefinedCreditCardData)}>
        Test createToken
      </button> */}

        <Container component="main" className={classes.main} maxWidth="sm">
          {index === 0 && <Products handleAddToCart={handleAddToCart} />}
          {index === 1 && <Cart items={cart} />}
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

      <SimpleDialog
        handleDialogClose={handleDialogClose}
        dialogState={dialog.open}
        itemName={dialog.itemName}
      />
    </ThemeProvider>
  );
}

export default App;
