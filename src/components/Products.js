import React, { useState, useEffect } from "react";
import dummyData from "../dummyData";
import ProductItem from "./ProductItem";
import AddToCartDialog from "./AddToCartDialog";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Products = ({ handleAddToCart }) => {
  const [dialog, setDialog] = useState({ open: false, itemName: "" });
  const [requestDialogCloseTimeOut, setRequestDialogCloseTimeOut] = useState(
    false
  );

  useEffect(() => {
    let dialogCloseDelay = false;

    if (requestDialogCloseTimeOut) {
      dialogCloseDelay = setTimeout(() => {
        dialogCloseDelay = false;
        setRequestDialogCloseTimeOut(false);
        setDialog({ ...dialog, open: false });
      }, 3000);
    }

    return () => {
      if (dialogCloseDelay) {
        clearTimeout(dialogCloseDelay);
      }
    };
  }, [requestDialogCloseTimeOut, setDialog, dialog]);

  const handleDialogClose = () => {
    setDialog({ ...dialog, open: false });
    setRequestDialogCloseTimeOut(false);
  };

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

      {!!dummyData.productDummyData &&
        dummyData.productDummyData.map(product => (
          <ProductItem
            key={product.id}
            data={product}
            handleAddToCart={() => {
              handleAddToCart(product);
              setDialog({ open: true, itemName: product.title });
              setRequestDialogCloseTimeOut(true);
            }}
          />
        ))}

      <AddToCartDialog
        handleDialogClose={handleDialogClose}
        dialogState={dialog.open}
        itemName={dialog.itemName}
      />
    </>
  );
};

export default Products;
