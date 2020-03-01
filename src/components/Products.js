import React from "react";
import Typography from "@material-ui/core/Typography";
import ProductItem from "./ProductItem";
import { makeStyles } from "@material-ui/core/styles";

const productData = [
  {
    id: "1",
    title: "Product 1",
    details:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    image: "https://placeimg.com/640/480/tech"
  },
  {
    id: "2",
    title: "Product 2",
    details:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    image: "https://placeimg.com/640/480/tech"
  }
];

const Products = ({ handleAddToCart }) => {
  const useStyles = makeStyles({
    title: {
      marginBottom: 25
    }
  });

  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" component="h1" className={classes.title}>
        Products
      </Typography>

      {productData &&
        productData.map(product => (
          <ProductItem
            key={product.id}
            data={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
    </>
  );
};

export default Products;
