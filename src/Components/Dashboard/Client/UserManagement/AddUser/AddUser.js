import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import './AddUser.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
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
                        position: 'absolute',
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

export default function CustomizedDialogs({ action, setAction }) {

    return (
        <div>
            <BootstrapDialog
                onClose={() => setAction({ open: false, type: null })}
                aria-labelledby="customized-dialog-title"
                open={action.open}
            >
                <BootstrapDialogTitle id="model-bottom-style" onClose={() => setAction({ open: false, type: null })}>
                    <span className='dialogue-heading'>{action.type} User</span>
                </BootstrapDialogTitle>
                <DialogContent>
                    <section className='dialogue-content-section'>
                        <TextField fullWidth size='small' id="outlined-basic" label="Username" variant="outlined" /><br />
                        <TextField fullWidth size='small' id="outlined-basic" label="Password" variant="outlined" /><br />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>Manager</MenuItem>
                                <MenuItem value={20}>Owner</MenuItem>
                            </Select>
                        </FormControl>
                    </section>
                </DialogContent>
                <DialogActions>
                    {
                        action.type === 'Add' ?
                            <Button variant='contained' onClose={() => setAction({ open: false, type: null })}>
                                Submit
                            </Button>
                            :
                            <Button variant='contained' onClose={() => setAction({ open: false, type: null })}>
                                Update
                            </Button>
                    }
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}