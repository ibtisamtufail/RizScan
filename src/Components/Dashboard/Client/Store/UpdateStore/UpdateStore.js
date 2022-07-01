import React, { useState, useEffect } from 'react';
import UpdateStoreForm from '../../../../Auth/Register/Register';
import Drawer from '../../../../Layout/Drawer/Drawer';
import axios from 'axios';
import { getStoreInfoAPiURL } from '../../../../Apis/Apis';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { showAlert } from '../../../../AlertMessage/AlertFunction';

const UpdateStore = () => {
    const Auth = useSelector(state => state.Auth);
    const [loading, setLoading] = useState(false);
    const [store, setStore] = useState(null);

    useEffect(() => {
        axios.interceptors.request.use(
            (config) => {
                config.headers.Authorization = Auth?.token ? `Bearer ${Auth?.token}` : "";
                return config;
            },
            (error) => {
                console.log("---> token check", error.response);
            }
        );
    }, [])

    const getStoreData = async () => {
        setLoading(true);
        const queryString = window.location.search;
        const parameters = new URLSearchParams(queryString);
        const value = parameters.get('store_id');
        try {
            const { data } = await axios.get(getStoreInfoAPiURL + `?store_id=${parseInt(value)}`);
            if (data) {
                setLoading(false);
                setStore(data);
            }
        } catch (error) {
            setLoading(false);
            showAlert('error', 'Error while fetching store data');
        }
    }

    useEffect(() => {
        getStoreData();
    }, [])


    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <section className='drawer-parent-container'>
                <Drawer />
            </section>
            <section className='dash-content-parent'>
                {
                    loading ?
                        <div style={{ textAlign: 'center', marginTop: '2rem' }}><CircularProgress /></div>
                        :
                        <UpdateStoreForm store={store} component='UpdateStore' />
                }
            </section>
        </div>
    )
}

export default UpdateStore;