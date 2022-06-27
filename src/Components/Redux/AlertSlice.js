import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    alert: false,
    status: null,
    message: null
}

const AlertSlice = createSlice({
    name: 'Alert',
    initialState,
    reducers: {
        show(state, action) {
            const { alert, status, message } = action.payload;
            state.alert = alert;
            state.status = status;
            state.message = message;
        },
        hide(state, action) {
            state.alert = false;
            state.status = null;
            state.message = null;
        }
    }
});

export const { show, hide } = AlertSlice.actions;
export default AlertSlice.reducer;