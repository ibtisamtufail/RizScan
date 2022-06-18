import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Forget.css';

const Forget = () => {
    return (
        <div className='forget-fields-parent'>
            <section>
                <h1 className='forget-heading'>Forget Password</h1>
                <section style={{ marginTop: '1rem' }}>
                    <TextField style={{ width: '350px' }} size='small' id="outlined-basic" label="Your Email" variant="outlined" /><br /><br />
                </section>
                <section className='action-parent-forget'>
                    <Button variant="contained">Submit</Button>
                </section>
            </section>
        </div>
    )
}

export default Forget;