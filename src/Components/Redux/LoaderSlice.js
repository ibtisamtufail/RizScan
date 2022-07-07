import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {},
}

const LoaderSlice = createSlice({
    name: 'Loader',
    initialState,
    reducers: {
        setLoader(state, action) {
           
            state.data = action.payload;
           
        },
        
    }
});

export const { setLoader} = LoaderSlice.actions;
export default LoaderSlice.reducer;