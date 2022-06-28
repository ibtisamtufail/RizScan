import React, { useState } from 'react';
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
import axios from 'axios';
import { AddUserAPiURL } from '../../../../Apis/Apis';
import { getAddedOnDate } from '../../../../CommonFunc/CommonFunc';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';
import { showAlert } from '../../../../AlertMessage/AlertFunction';
import { setAddNewUser } from '../../../../Redux/UsersSlice';

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
    const customer_id = useSelector(state => state.Auth.customer_id);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [user_name, setUser_name] = useState('');
    const [password, setPassword] = useState('');
    const [user_type, setUser_type] = useState('');

    const addUserFunc = async () => {
        setLoading(true);
        let today = getAddedOnDate();
        let obj = { user_name, password, user_type, added_on: today, store_id: customer_id };
        try {
            const { data } = await axios.post(AddUserAPiURL, obj);
            if (data?.store_id) {
                setLoading(false);
                dispatch(setAddNewUser(data?.users));
                showAlert('success', 'User added successfully')
            }
        } catch (error) {
            setLoading(false);
            if (error?.response?.data?.message) {
                showAlert('error', error?.response?.data?.message);
            }
            else {
                showAlert('error', 'Something went wrong');
            }
        }
    }

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
                        <br />
                        <TextField onChange={(e) => setUser_name(e.target.value)} fullWidth size='small' label="Username" variant="outlined" /><br />
                        <TextField onChange={(e) => setPassword(e.target.value)} fullWidth size='small' label="Password" type='password' variant="outlined" /><br />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type</InputLabel>
                            <Select
                                defaultValue=""
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                onChange={(e) => setUser_type(e.target.value)}
                            >
                                <MenuItem value='Manager'>Manager</MenuItem>
                                <MenuItem value='Cashier'>Cashier</MenuItem>
                            </Select>
                        </FormControl>
                    </section>
                </DialogContent>

                <DialogActions>
                    {
                        action.type === 'Add' ?
                            <Button disabled={loading} style={{ minWidth: '100px' }} onClick={addUserFunc} variant='contained' onClose={() => setAction({ open: false, type: null })}>
                                {
                                    loading
                                        ?
                                        <CircularProgress size="1.5rem" />
                                        :
                                        'Submit'
                                }
                            </Button>
                            :
                            <Button style={{ minWidth: '100px' }} variant='contained' onClose={() => setAction({ open: false, type: null })}>
                                {
                                    loading
                                        ?
                                        <CircularProgress size="1.5rem" />
                                        :
                                        'Update'
                                }
                            </Button>
                    }
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}