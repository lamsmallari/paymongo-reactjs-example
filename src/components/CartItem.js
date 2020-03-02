import React, { useState } from "react";
import PESO from "../helpers/toPesoFormat";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";

const CartItem = ({ item, className }) => {
  const [open, setOpen] = useState(false);

  const useStyles = makeStyles(theme => ({
    price: {
      marginRight: 25
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  }));

  const handleShowActions = () => {
    setOpen(!open);
  };

  const classes = useStyles();

  return (
    <>
      <ListItem button onClick={handleShowActions}>
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
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

export default CartItem;
