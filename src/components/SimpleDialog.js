import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import green from "@material-ui/core/colors/green";

const SimpleDialog = ({ dialogState, handleDialogClose, itemName }) => {
  return (
    <Dialog
      open={dialogState}
      onClose={handleDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <Box component="div" display="flex" justifyContent="center" mb={2}>
          <CheckCircleOutlineOutlinedIcon
            style={{ color: green[500] }}
            fontSize="large"
          />
        </Box>

        <Typography variant="h5" component="h5" align="center" gutterBottom>
          {itemName}
        </Typography>
        <Typography
          component="p"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Added to cart
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default SimpleDialog;
