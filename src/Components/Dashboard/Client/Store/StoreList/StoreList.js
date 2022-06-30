import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import AddIcon from '../imgs/add.png';
import Drawer from '../../../../Layout/Drawer/Drawer';
import './StoreList.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllStoreAPiURL } from '../../../../Apis/Apis';
import axios from 'axios';
import { showAlert } from '../../../../AlertMessage/AlertFunction';
import CircularProgress from '@mui/material/CircularProgress';

const StoreList = () => {
    const navigation = useNavigate();
    const Auth = useSelector(state => state.Auth);

    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getStores();
    }, [])

    const getStores = async () => {
        setLoading(true);
        axios.get(getAllStoreAPiURL + `?customer_id=${Auth?.customer_id}`, {
            headers: {
                Authorization: `Bearer ${Auth?.token}`
            },
        }).then(data => {
            if (data) {
                setLoading(false);
                setStores(data?.data?.stores);
            }
        }).catch(error => {
            setLoading(false);
            if (error?.response?.data?.message) {
                showAlert('error', error?.response?.data?.message);
            }
            else {
                showAlert('error', 'Something went wrong');
            }
        })
    }
    return <>
        <div style={{ display: 'flex' }}>
            <section className='drawer-parent-container'>
                <Drawer />
            </section>
            <section className='dash-content-parent'>
                {loading ? <div style={{ textAlign: 'center', marginTop: '2rem' }}><CircularProgress /></div> :
                    stores.length > 0 ?
                        <section className='grid-parent-cards' style={{ marginTop: '1rem' }}>
                            {
                                stores?.map((item, index) => {
                                    return <Cards item={item} key={index} />
                                })
                            }
                        </section>
                        :
                        <div className='user-list-empty' style={{ marginTop: '2rem' }}>
                            <span>No Store Available Yet</span>
                        </div>
                }
                <section className='add-store-action-parent'>
                    <img style={{ width: '40px' }} src={AddIcon} alt='add' />
                    <span onClick={() => navigation('/addstore')} className='add-store-text'>Add Store</span>
                </section>
            </section>
        </div>
    </>
}

export default StoreList;