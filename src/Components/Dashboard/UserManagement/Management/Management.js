import React, { useState } from 'react';
import Drawer from '../../../Drawer/Drawer';
import './Management.css';
import Card from './Card';
import AddIcon from '../../Store/imgs/add.png';
import AddUser from '../AddUser/AddUser';

const Management = () => {
    const array = [1, 2, 3, 4, 5, 6];
    const [action, setAction] = useState({ open: false, type: null });

    return <div className='menu-parent'>
        <section className='drawer-parent'>
            <Drawer />
        </section>
        <section className='dash-content-parent'>
            <section className='page-heading'>
                <span className='menu-text'>User Management</span>
            </section>
            <section className='grid-parent-cards' style={{ marginTop: '1rem' }}>
                {
                    array?.map((item, index) => {
                        return <Card setAction={setAction} key={index} />
                    })
                }
            </section>
            <section className='add-store-action-parent'>
                <img style={{ width: '40px' }} src={AddIcon} alt='add' />
                <span onClick={() => setAction({ open: true, type: 'Add' })} className='add-store-text'>Add User</span>
            </section>
        </section>
        <AddUser action={action} setAction={setAction} />
    </div>
}

export default Management;