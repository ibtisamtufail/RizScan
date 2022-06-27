import React from 'react';
import Form from './Form';
import WithAuth from '../../HOC/Hoc';
import './Register.css';

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

export default WithAuth(Register,'RDTUM');