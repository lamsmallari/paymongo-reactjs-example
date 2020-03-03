import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckoutForm from "./CheckoutForm";
import OrderComplete from "./OrderComplete";

const Checkout = ({
  cart,
  cartTotal,
  handlePayment,
  handleFieldChange,
  billingInfo,
  orderCompleteData,
  handleConfirm,
  fakePaymentTransition
}) => {
  const useStyles = makeStyles(theme => ({
    title: {
      marginBottom: theme.spacing(3)
    },
    fakePaymentTransition: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(4),
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2)
    },
    spinner: {
      marginBottom: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        className={classes.title}
        gutterBottom
      >
        Checkout
      </Typography>

      {fakePaymentTransition && (
        <>
          <Grid container justify="center">
            <Grid item>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                component={Paper}
                className={classes.fakePaymentTransition}
              >
                <Grid item className={classes.spinner}>
                  <CircularProgress />
                </Grid>
                <Grid item>
                  <Typography component="p" align="center">
                    Performing payment transaction, please wait.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}

      {cart.length <= 0 && !!orderCompleteData && !fakePaymentTransition && (
        <>
          <OrderComplete
            data={orderCompleteData}
            handleConfirm={handleConfirm}
          />
        </>
      )}

      {cart.length > 0 && !orderCompleteData && !fakePaymentTransition && (
        <>
          <CheckoutForm
            cart={cart}
            cartTotal={cartTotal}
            handlePayment={handlePayment}
            handleFieldChange={handleFieldChange}
            billingInfo={billingInfo}
          />
        </>
      )}

      {cart.length <= 0 && !orderCompleteData && !fakePaymentTransition && (
        <p>Cart is empty. Please add products your cart.</p>
      )}
    </>
  );
};

export default Checkout;
