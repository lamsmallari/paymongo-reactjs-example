import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckoutForm from "./CheckoutForm";
import OrderComplete from "./OrderComplete";

import cyan from "@material-ui/core/colors/cyan";

const useStyles = makeStyles(theme => ({
  paymentTransitionDelay: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  },
  spinner: {
    marginBottom: theme.spacing(2),
    "& .MuiCircularProgress-root": {
      color: theme.palette.type === "dark" ? cyan[300] : theme.palette.primary
    }
  }
}));

const Checkout = ({
  cart,
  cartTotal,
  handlePayment,
  handleFieldChange,
  billingInfo,
  orderCompleteData,
  handleConfirm,
  paymentTransitionDelay,
  errors
}) => {
  const classes = useStyles();

  return (
    <>
      {paymentTransitionDelay && (
        <>
          <Grid container justify="center">
            <Grid item>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                component={Paper}
                className={classes.paymentTransitionDelay}
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

      {cart.length <= 0 && !!orderCompleteData && !paymentTransitionDelay && (
        <>
          <OrderComplete
            data={orderCompleteData}
            handleConfirm={handleConfirm}
          />
        </>
      )}

      {cart.length > 0 && !orderCompleteData && !paymentTransitionDelay && (
        <>
          <CheckoutForm
            cart={cart}
            cartTotal={cartTotal}
            handlePayment={handlePayment}
            handleFieldChange={handleFieldChange}
            billingInfo={billingInfo}
            errors={errors}
          />
        </>
      )}

      {cart.length <= 0 && !orderCompleteData && !paymentTransitionDelay && (
        <p>Cart is empty. Please add products your cart.</p>
      )}
    </>
  );
};

export default Checkout;
