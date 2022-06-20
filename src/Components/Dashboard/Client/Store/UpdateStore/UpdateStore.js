import React from 'react';
import UpdateStoreForm from '../../../../Auth/Register/Register';
import Drawer from '../../../../Layout/Drawer/Drawer';

const UpdateStore = () => {
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <section style={{ position: 'relative', minWidth: '220px' }}>
                <Drawer />
            </section>
            <section className='dash-content-parent'>
                <UpdateStoreForm component='UpdateStore' />
            </section>
        </div>
    )
}

export default UpdateStore;