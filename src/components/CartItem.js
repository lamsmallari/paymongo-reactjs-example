import React from "react";
import PESO from "../helpers/toPesoFormat";

import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Box from "@material-ui/core/Box";

import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";

const CartItem = ({ item, handleItemQuantity }) => {
  const useStyles = makeStyles(theme => ({
    price: {
      marginRight: 25
    }
  }));

  const classes = useStyles();

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={item.title}
          secondary={
            <>
              {`Quantity: ${item.quantity}`}
              <br />
              {`Subtotal: ${PESO(item.subTotal)}`}
            </>
          }
        />
        <Box component="div" className={classes.actions}>
          <IconButton
            onClick={() => handleItemQuantity(item)}
            aria-label="add to likes"
          >
            <EditIcon />
          </IconButton>
        </Box>
      </ListItem>
    </>
  );
};

export default CartItem;
