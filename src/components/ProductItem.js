import React from "react";
import PESO from "../helpers/toPesoFormat";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
    marginBottom: theme.spacing(2)
  },
  actions: {
    padding: "0 16px 8px"
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
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Button
              size="small"
              color="primary"
              variant="contained"
              disableElevation
              onClick={() => handleAddToCart(data)}
            >
              Add to cart
            </Button>
            <Box>
              <IconButton aria-label="add to likes">
                <FavoriteIcon />
              </IconButton>
            </Box>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductItem;
