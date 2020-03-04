import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness2Icon from "@material-ui/icons/Brightness2";

import amber from "@material-ui/core/colors/amber";

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(3)
  }
}));

const ViewsHeader = ({ children, colorScheme, setColorScheme }) => {
  const classes = useStyles();
  return (
    <Grid container justify="space-between">
      <Grid item>
        <Typography variant="h4" component="h1" className={classes.title}>
          {children}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton
          onClick={() =>
            setColorScheme(colorScheme === "dark" ? "light" : "dark")
          }
          aria-label="set color scheme"
        >
          {colorScheme === "dark" ? (
            <Brightness5Icon style={{ color: amber[500] }} />
          ) : (
            <Brightness2Icon />
          )}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ViewsHeader;
