import React, { useState } from "react";
import PESO from "../helpers/toPesoFormat";

import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const CartItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const useStyles = makeStyles(theme => ({
    price: {
      marginRight: 25
    },
    nested: {}
  }));

  const handleShowActions = () => {
    setOpen(!open);
  };

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
              <Typography
                component="span"
                variant="body2"
                className={classes.price}
              >
                {`Price: ${PESO(item.price)}`}
              </Typography>
              {`Quantity: ${item.quantity}`}
            </>
          }
        />
        <Box>
          <IconButton aria-label="add to likes">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="add to likes">
            <DeleteIcon />
          </IconButton>
        </Box>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box className={classes.nested}>
          <Typography
            component="span"
            variant="body2"
            className={classes.price}
          >
            {`Price: ${PESO(item.price)}`}
          </Typography>
        </Box>
      </Collapse>
    </>
  );
};

export default CartItem;
