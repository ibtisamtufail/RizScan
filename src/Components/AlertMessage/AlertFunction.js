import store from '../Redux/Store';
import { show, hide } from '../Redux/AlertSlice';

export const showAlert = (status, message) => {
    const { dispatch } = store;
    dispatch(show({ alert: true, status, message }));
    setTimeout(() => {
        dispatch(hide());
    }, 5000);
}