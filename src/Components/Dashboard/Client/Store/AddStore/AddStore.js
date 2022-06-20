import React from 'react';
import AddStoreForm from '../../../../Auth/Register/Register';
import Drawer from '../../../../Layout/Drawer/Drawer';
import './AddStore.css';

const AddStore = () => {
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <section className='drawer-parent-container'>
                <Drawer />
            </section>
            <section className='dash-content-parent'>
                <AddStoreForm component='AddStore' />
            </section>
        </div>
    )
}

export default AddStore;