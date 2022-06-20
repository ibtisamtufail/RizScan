import React, { useState } from 'react';
import './Register.css';
import Form from './Form';

const Register = ({ component = 'Register' }) => {

    return (
        <div style={{ paddingBottom: '3rem' }}>
            {component === 'Register' && <h1 className='Login-heading'>Register</h1>}
            {component === 'AddStore' && <h1 className='Login-heading'>Add Store</h1>}
            {component === 'UpdateStore' && <h1 className='Login-heading'>Update Store or Payment Information</h1>}
            <section className='grid-parent'>
                <section className='reg-form-parent'>
                    <Form />
                </section>
            </section>
        </div>
    )
}

export default Register;