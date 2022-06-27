import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { hide } from '../Redux/AlertSlice';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertComp() {
    const alertState = useSelector(state => state.Alert);
    const dispatch = useDispatch();
    const { alert, status, message } = alertState;
    const vertical = "bottom";
    const horizontal = "center";

    const handleClose = () => {
        dispatch(hide());
    }

    return <>
        {
            alert ?
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar open={alert && alert} autoHideDuration={6000} anchorOrigin={{ vertical, horizontal }} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={status && status} sx={{ width: '100%' }}>
                            {message && message}
                        </Alert>
                    </Snackbar>
                </Stack>
                :
                null
        }
    </>
}