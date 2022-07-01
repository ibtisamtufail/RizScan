import React, { useState, useEffect } from 'react';
import Drawer from '../../../../Layout/Drawer/Drawer';
import TextField from '@mui/material/TextField';
import './UpdateProfile.css';
import Button from '@mui/material/Button';
import axios from 'axios';
import { updateCustomerProfileAPiURL, getCustomerProfileAPiURL } from '../../../../Apis/Apis';
import { useSelector } from 'react-redux';
import { showAlert } from '../../../../AlertMessage/AlertFunction';
import CircularProgress from '@mui/material/CircularProgress';
import { getAddedOnDate } from '../../../../CommonFunc/CommonFunc';
import WithAuth from '../../../../HOC/Hoc';

const UpdateProfile = () => {
    const Auth = useSelector(state => state.Auth);

    const [profile, setProfile] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

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
    }, []);

    useEffect(() => {
        getCustomerProfile();
    }, []);

    const getCustomerProfile = () => {
        setLoading(true);
        axios.get(getCustomerProfileAPiURL + `?customer_id=${Auth?.customer_id}`, {
            headers: {
                'Authorization': `Bearer ${Auth?.token}`
            },
        }).then(data => {
            if (data) {
                setLoading(false);
                setProfile(data.data);
            }
        }).catch(error => {
            setLoading(false);
            errorHandler(error);
        });
    }

    const updateCustomer = async () => {
        if (password !== confirmPassword) {
            return showAlert('error', 'Password not match');
        }
        setLoading(true);
        let today = getAddedOnDate();
        let obj = {
            customer_id: Auth?.customer_id,
            Email_address: email !== '' ? email : profile?.email_address,
            password: password,
            mobile_number: mobile !== '' ? mobile : profile?.mobile_number,
            first_name: firstName !== '' ? firstName : profile?.first_name,
            last_name: lastName !== '' ? lastName : profile?.last_name,
            updated_on: today
        }
        try {
            const { data } = await axios.put(updateCustomerProfileAPiURL, obj);
            if (data) {
                setLoading(false);
                showAlert('success', 'Profile update successfully');
                setProfile(data);
            }
        } catch (error) {
            setLoading(false);
            errorHandler(error);
        }
    }

    const errorHandler = (error) => {
        if (error?.response?.data?.message || error?.response?.data?.error) {
            showAlert('error', error?.response?.data?.message || error?.response?.data?.error);
        }
        else {
            showAlert('error', 'Something went wrong');
        }
    }

    return <>
        <div className='menu-parent'>
            <section className='drawer-parent-container'>
                <Drawer />
            </section>
            <section className='dash-content-parent'>
                {loading ? <div style={{ textAlign: 'center', marginTop: '2rem' }}><CircularProgress /></div> :
                    <>
                        <section className='page-heading'>
                            <span className='menu-text'>Update Profile</span>
                        </section>
                        <section className='update-user-manage-profile'>
                            <TextField defaultValue={profile ? profile?.first_name : firstName} onChange={(e) => setFirstName(e.target.value)} className='text-field' size='small' label="First Name" variant="outlined" />
                            <TextField defaultValue={profile ? profile?.last_name : lastName} onChange={(e) => setLastName(e.target.value)} className='text-field' size='small' label="Last Name" variant="outlined" />
                            <TextField inputProps={
                                { readOnly: true, }
                            } defaultValue={profile ? profile?.email_address : email} onChange={(e) => setEmail(e.target.value)} className='text-field' size='small' label="Email" variant="outlined" />
                            <TextField defaultValue={profile ? profile?.mobile_number : mobile} onChange={(e) => setMobile(e.target.value)} className='text-field' size='small' label="Mobile" variant="outlined" />
                            <TextField type='password' onChange={(e) => setPassword(e.target.value)} className='text-field' size='small' label="Password" variant="outlined" />
                            <TextField type='password' onChange={(e) => setConfirmPassword(e.target.value)} className='text-field' size='small' label="Confirm Password" variant="outlined" />
                            <Button onClick={updateCustomer} className='update-btn-user' variant="contained">Update</Button>
                        </section>
                    </>
                }
            </section>
        </div>
    </>
}

export default WithAuth(UpdateProfile, 'RDTLN');