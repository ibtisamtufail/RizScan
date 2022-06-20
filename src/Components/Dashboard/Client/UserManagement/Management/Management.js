import React, { useState } from 'react';
import Drawer from '../../../../Layout/Drawer/Drawer';
import './Management.css';
import AddIcon from '../../Store/imgs/add.png';
import AddUser from '../AddUser/AddUser';
import Users from './Users';

const Management = () => {
    const [action, setAction] = useState({ open: false, type: null });

    return <div className='menu-parent'>
        <section className='drawer-parent'>
            <Drawer />
        </section>
        <section className='dash-content-parent user-manage-parent'>
            <section className='page-heading'>
                {/* <span className='menu-text'>User Management</span> */}
                <section className='add-store-action-parent add-store-action'>
                    <img style={{ width: '40px', position: 'relative', right: '14px' }} src={AddIcon} alt='add' />
                    <span onClick={() => setAction({ open: true, type: 'Add' })} className='add-store-text'>Add User</span>
                </section>
            </section>
            <section className='' style={{ marginTop: '1rem' }}>
                <Users setAction={setAction} />
            </section>
        </section>
        <AddUser action={action} setAction={setAction} />
    </div>
}

export default Management;