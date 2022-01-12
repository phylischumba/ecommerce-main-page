import { BootstrapDialogTitle } from "./Dialog";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CartDialog = (props) => {
  const { open, handleClose } = props;

  console.log(typeof handleClose);

  return (
    <BootstrapDialog
      onClose={() => handleClose()}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Modal title
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <p gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => handleClose()}>
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};
export default CartDialog;
