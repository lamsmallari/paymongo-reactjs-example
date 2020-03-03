import React, { useState } from "react";
import PESO from "../helpers/toPesoFormat";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CartItem from "./CartItem";
import CartItemOptionsDrawer from "./CartItemOptionsDrawer";

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(3)
  },
  cartList: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper
  },
  total: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2)
  }
}));

const Cart = ({ cart, handleCartQuantity, handRemoveFromCart, setIndex }) => {
  const [editQuantity, setEditQuantity] = useState({
    open: false,
    item: { title: "", quantity: "" }
  });

  const handleItemQuantity = item => {
    setEditQuantity({ open: true, item });
  };

  const handleDrawerClose = () => {
    setEditQuantity({ ...editQuantity, open: false });
  };

  const total = cart.reduce((acc, curr) => acc + curr.subTotal, 0);

  const classes = useStyles();

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        className={classes.title}
      >
        Cart
      </Typography>

      {cart.length > 0 && (
        <List component="nav" className={classes.cartList} disablePadding>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              open={editQuantity.open}
              handleItemQuantity={handleItemQuantity}
            />
          ))}
        </List>
      )}

      <Paper square className={classes.total}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h6" component="h6">
              Total: {PESO(total)}
            </Typography>
          </Grid>
          <Grid item>
            <Button color="primary" onClick={() => setIndex(2)}>
              Checkout
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <CartItemOptionsDrawer
        open={editQuantity.open}
        item={editQuantity.item}
        handleDrawerClose={handleDrawerClose}
        handleCartQuantity={handleCartQuantity}
        handRemoveFromCart={handRemoveFromCart}
      />
    </>
  );
};

export default Cart;
