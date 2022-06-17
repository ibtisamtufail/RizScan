import React from 'react';
import AddStoreForm from '../../../Register/Register';
import Drawer from '../../../Drawer/Drawer';

const AddStore = () => {
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <section style={{ position: 'relative', minWidth: '220px' }}>
                <Drawer />
            </section>
            <section className='dash-content-parent'>
                <AddStoreForm component='AddStore' />
            </section>
        </div>
    )
}

export default AddStore;