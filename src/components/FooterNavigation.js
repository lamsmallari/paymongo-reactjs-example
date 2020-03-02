import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles({
  root: {
    height: 80
  },
  buttons: {
    "& svg": {
      marginBottom: 5
    }
  }
});

const FooterNavigation = ({ onChange, index, cartCount }) => {
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
        icon={
          <Badge color="secondary" badgeContent={cartCount}>
            <ShoppingCartRoundedIcon />
          </Badge>
        }
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
