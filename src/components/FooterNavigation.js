import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%"
  },
  buttons: {
    maxWidth: "33%",
    "& span": {
      marginTop: 5
    }
  }
});

const FooterNavigation = ({ onChange, index }) => {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={index}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.buttons}
        label="Products"
        icon={<StorefrontRoundedIcon />}
      />
      <BottomNavigationAction
        className={classes.buttons}
        label="Cart"
        icon={<ShoppingCartRoundedIcon />}
      />
      <BottomNavigationAction
        className={classes.buttons}
        label="Checkout"
        icon={<CreditCardRoundedIcon />}
      />
    </BottomNavigation>
  );
};

export default FooterNavigation;
