import React from 'react';
import Drawer from '../../../Drawer/Drawer';
import './StoreMenu.css';
import UserIcon from './imgs/user.png';
import ReportIcon from './imgs/report.png';
import SubsIcon from './imgs/subs.png';

const StoreMenu = () => {
    const array = [UserIcon, ReportIcon, SubsIcon];
    return <div className='menu-parent'>
        <section className='drawer-parent'>
            <Drawer />
        </section>
        <section className='dash-content-parent'>
            <section className='dash-content-parent menu-heading'>
                <span className='menu-text'>Store Menu</span>
            </section>
            <section className='grid-parent-cards menu-cards'>
                {
                    array?.map((item, index) => {
                        return <img src={item} key={index} alt='card' className='menu-img' />
                    })
                }
            </section>
        </section>
    </div>
}

export default StoreMenu;