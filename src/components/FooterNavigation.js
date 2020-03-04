import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded";
import Badge from "@material-ui/core/Badge";
import cyan from "@material-ui/core/colors/cyan";

const useStyles = makeStyles(theme => ({
  root: {
    height: 80
  },
  buttons: {
    "& svg": {
      marginBottom: 5
    },
    "&.Mui-selected": {
      color: theme.palette.type === "dark" ? cyan[300] : theme.palette.primary
    }
  }
}));

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
            <ShoppingCartOutlinedIcon />
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
