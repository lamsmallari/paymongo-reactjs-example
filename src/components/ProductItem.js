import React from "react";
import PESO from "../helpers/toPesoFormat";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600
  },
  actions: {
    paddingTop: 0,
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  price: {
    marginBottom: theme.spacing(1)
  }
}));

const ProductItem = ({ data, handleAddToCart, ...rest }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {data.title}
          </Typography>
          <Typography className={classes.price} color="textSecondary">
            {`${PESO(data.price)}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.details}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Grid container justify="flex-end">
            <Button
              size="small"
              color="primary"
              variant="contained"
              disableElevation
              onClick={() => handleAddToCart(data)}
            >
              Add to cart
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductItem;
