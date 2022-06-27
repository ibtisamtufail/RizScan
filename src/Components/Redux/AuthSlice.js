import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    customer_id: null,
    token: null,
    stores: []
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthData(state, action) {
            const { customer_id, token, stores } = action.payload;
            state.customer_id = customer_id;
            state.token = token;
            state.stores = stores;
        },
        setAuthLogout(state, action) {
            state.customer_id = null;
            state.token = null;
            state.stores = [];
        }
    }
});

export const { setAuthData, setAuthLogout } = AuthSlice.actions;
export default AuthSlice.reducer;