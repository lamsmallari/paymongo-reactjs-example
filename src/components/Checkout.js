import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CheckoutForm from "./CheckoutForm";

const Checkout = ({ cart, handlePayment }) => {
  const useStyles = makeStyles(theme => ({
    title: {
      marginBottom: theme.spacing(3)
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

      <CheckoutForm cart={cart} handlePayment={handlePayment} />
    </>
  );
};

export default Checkout;
