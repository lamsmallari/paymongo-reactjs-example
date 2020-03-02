import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import CartItem from "./CartItem";

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

const Cart = ({ items }) => {
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
            <CartItem key={item.id} item={item} />
          ))}
        </List>
      )}
    </>
  );
};

export default Cart;
