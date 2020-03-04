import React, { useState, useEffect } from "react";
import dummyData from "../dummyData";
import ProductItem from "./ProductItem";
import AddToCartDialog from "./AddToCartDialog";

import Grid from "@material-ui/core/Grid";

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

  return (
    <>
      {!!dummyData.productDummyData && (
        <>
          <Grid container direction="column" spacing={2}>
            {dummyData.productDummyData.map(product => (
              <Grid item key={product.id}>
                <ProductItem
                  data={product}
                  handleAddToCart={() => {
                    handleAddToCart(product);
                    setDialog({ open: true, itemName: product.title });
                    setRequestDialogCloseTimeOut(true);
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}

      <AddToCartDialog
        handleDialogClose={handleDialogClose}
        dialogState={dialog.open}
        itemName={dialog.itemName}
      />
    </>
  );
};

export default Products;
