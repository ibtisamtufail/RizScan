import React, { useState } from 'react';
import Drawer from '../../../Layout/Drawer/Drawer';
import '../UserManagement/Management/Management.css';
import AddIcon from '../Store/imgs/add.png';
import Table from "./Table"
import CustomizedDialogs from "./modal"

const ReportsEmailList = () => {
    const [action, setAction] = useState({ open: false, type: null, data: null });
    const [open, setOpen] = React.useState(false);

    
  const handleClickOpen = () => {
    setOpen(true);
  };


    return <div className='menu-parent'>
    <CustomizedDialogs open = {open} setOpen = {setOpen} action = "1"/>
        <section className='drawer-parent-container'>
            <Drawer />
        </section>
        <section className='dash-content-parent user-manage-parent'>
            <section className='page-heading'>
                {/* <span className='menu-text'>User Management</span> */}
                <section className='add-store-action-parent add-store-action'>
                    <img style={{ width: '40px', position: 'relative', right: '14px' }} src={AddIcon} alt='add' />
                    <span onClick={handleClickOpen} className='add-store-text' >Add Email</span>
                </section>
            </section>
            <section style={{ marginTop: '1rem' }}>
                <Table/>
            </section>
        </section>
        
    </div>
}

export default ReportsEmailList;

