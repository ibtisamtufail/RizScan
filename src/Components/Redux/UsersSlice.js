import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    store_id: null,
    users: []
}

const UserListSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserListData(state, action) {
            const { store_id, users } = action.payload;
            state.store_id = store_id;
            state.users = users;
        },
        setAddNewUser(state, action) {
            state.users = action.payload;
        }
    }
});

export const { setUserListData, setAddNewUser } = UserListSlice.actions;
export default UserListSlice.reducer;