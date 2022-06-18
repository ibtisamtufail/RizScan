import React from 'react';
import Drawer from '../../../Drawer/Drawer';
import TextField from '@mui/material/TextField';
import './UpdateProfile.css';
import Button from '@mui/material/Button';

const UpdateProfile = () => {
    return <div className='menu-parent'>
        <section className='drawer-parent'>
            <Drawer />
        </section>
        <section className='dash-content-parent'>
            <section className='page-heading'>
                <span className='menu-text'>Update Profile</span>
            </section>
            <section className='update-user-manage-profile'>
                <TextField className='text-field' size='small' id="outlined-basic" label="First Name" variant="outlined" />
                <TextField className='text-field' size='small' id="outlined-basic" label="Last Name" variant="outlined" />
                <TextField className='text-field' size='small' id="outlined-basic" label="Email" variant="outlined" />
                <TextField className='text-field' size='small' id="outlined-basic" label="Mobile" variant="outlined" />
                <TextField className='text-field' size='small' id="outlined-basic" label="Password" variant="outlined" />
                <TextField className='text-field' size='small' id="outlined-basic" label="Confirm Password" variant="outlined" />
                <Button className='update-btn-user' variant="contained">Update</Button>
            </section>
        </section>
    </div>
}

export default UpdateProfile;