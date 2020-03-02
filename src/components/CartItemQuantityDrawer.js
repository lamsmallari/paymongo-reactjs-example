import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";

const CartItemQuantityDrawer = ({
  item,
  open,
  handleDrawerClose,
  handleCartQuantity,
  handRemoveFromCart
}) => {
  const useStyles = makeStyles(theme => ({
    main: {
      width: "100%",
      maxWidth: 260,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    quantityFieldContainer: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(3)
    },
    quantityField: {
      maxWidth: 100,
      textAlign: "center"
    },
    delete: {
      marginBottom: theme.spacing(1)
    }
  }));

  const classes = useStyles();

  return (
    <Drawer anchor="bottom" open={open} onClose={handleDrawerClose}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12} className={classes.main}>
          <Typography
            component="p"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {item.title}
          </Typography>

          <Grid
            container
            direction="row"
            justify="space-between"
            className={classes.quantityFieldContainer}
          >
            <div>
              <IconButton
                onClick={() => handleCartQuantity(item.idx, "decrement")}
                aria-label="decrement"
              >
                <RemoveIcon />
              </IconButton>
            </div>

            <div>
              <TextField
                id="quantity"
                label="Quantity"
                variant="outlined"
                value={item.quantity}
                className={classes.quantityField}
              />
            </div>

            <div>
              <IconButton
                onClick={() => handleCartQuantity(item.idx, "increment")}
                aria-label="increment"
              >
                <AddIcon />
              </IconButton>
            </div>
          </Grid>

          <Grid container direction="column" justify="center">
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              onClick={() => {
                handleDrawerClose();
                handRemoveFromCart(item.idx);
              }}
              startIcon={<DeleteIcon />}
              className={classes.delete}
            >
              Remove from Cart
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              onClick={handleDrawerClose}
              startIcon={<CloseIcon />}
            >
              Close
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default CartItemQuantityDrawer;
