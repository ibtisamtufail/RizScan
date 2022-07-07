import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ open, setOpen, action }) {
  const [email, setEmail] = useState("");
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {action == 1 ? (
          <>
            {" "}
            <div style={{ height: "200px", width: "250px" }}>
              <BootstrapDialogTitle
                style={{ textAlign: "center" }}
                id="customized-dialog-title"
                onClose={handleClose}
              >
                Enter Email
              </BootstrapDialogTitle>
              <DialogContent>
                <TextField
                  style={{ marginTop: "10px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-fields"
                  size="small"
                  label="Email id"
                  variant="outlined"
                />
              </DialogContent>
              <DialogActions style={{ display: "flex" }}>
                <Button
                  Button
                  variant="contained"
                  onClick={handleClose}
                  style={{ flexGrow: "1" }}
                >
                  ADD{" "}
                </Button>
              </DialogActions>
            </div>
          </>
        ) : (
          <>
            <div style={{ height: "170px", width: "400px" }}>
              <BootstrapDialogTitle
                style={{ textAlign: "center" ,fontSize: "15px"}}
                id="customized-dialog-title"
                onClose={handleClose}
              >
                
              </BootstrapDialogTitle>
              <DialogContent style={{ textAlign: "center" ,fontSize: "18px" , marginTop: "10px"}}>
              ARE YOU SURE YOU WANT TO DELETE THIS EMAIL?
              </DialogContent>
              <DialogActions
                style={{ display: "flex" }}
              >
                <Button
                  Button
                  variant="contained"
                  onClick={handleClose}
                  style={{ flexGrow: "1"  }}
                >
                  NO{" "}
                </Button>

                <Button
                  Button
                  variant="contained"
                  onClick={handleClose}
                  
                  style={{ flexGrow: "1" ,backgroundColor:"red" }}
                >
                  yes{" "}
                </Button>
              </DialogActions>
            </div>
          </>
        )}
      </BootstrapDialog>
    </div>
  );
}
