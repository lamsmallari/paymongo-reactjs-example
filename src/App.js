import React, { useState } from "react";
import paymongo from "./services/paymongo";

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
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    marginTop: "auto",
    backgroundColor: "#fff"
  }
}));

function App() {
  const [index, setIndex] = useState(0);

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

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        {/* <button onClick={() => handlePayment(predefinedCreditCardData)}>
        Test createToken
      </button> */}

        <Container component="main" className={classes.main} maxWidth="sm">
          {index === 0 && <Products />}
          {index === 1 && <Cart />}
          {index === 2 && <Checkout />}
        </Container>

        <Container component="footer" className={classes.footer} maxWidth="sm">
          <FooterNavigation onChange={setIndex} index={index} />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
