import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import CartItem from "./CartItem";
import CartItemQuantityDrawer from "./CartItemQuantityDrawer";

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: 25
  },
  root: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper
  }
}));

const Cart = ({ items, handleCartQuantity, handRemoveFromCart }) => {
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

      {items.length > 0 && (
        <List component="nav" className={classes.root}>
          {items.map(item => (
            <CartItem
              key={item.id}
              item={item}
              open={editQuantity.open}
              handleItemQuantity={handleItemQuantity}
            />
          ))}
        </List>
      )}

      <CartItemQuantityDrawer
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
