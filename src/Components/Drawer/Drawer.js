import React from 'react';
import './Drawer.css';
import HomeIcon from './imgs/home.png';
import ProfileIcon from './imgs/profile.png';
import ReportsIcon from './imgs/reports.png';
import StoreIcon from './imgs/store.png';
import SubsIcon from './imgs/subs.png';
import UsersIcon from './imgs/users.png';
import LogoutIcon from './imgs/logout.png';
import { useNavigate } from 'react-router-dom';

const Drawer = () => {
    const navigation = useNavigate();
    return (
        <div style={{ position: 'fixed' }}>
            <section className='drawer-parent'>
                <div className='user-name-parent'>
                    <span className='user-name'>Adam Jones</span>
                </div>
                <ul className='drawer-ul'>
                    <li className='drawer-list'>
                        <img className='icon-imgs' src={HomeIcon} alt="home" />
                        <span>Home</span>
                    </li>
                    <li className='drawer-list' onClick={() => navigation('/storelist')} >
                        <img className='icon-imgs' src={StoreIcon} alt="store" />
                        <span>Store</span>
                    </li>
                    <li className='drawer-list'>
                        <img className='icon-imgs' src={UsersIcon} alt="users" />
                        <span>Users</span>
                    </li>
                    <li className='drawer-list'>
                        <img className='icon-imgs' src={ReportsIcon} alt="reports" />
                        <span>Reports</span>
                    </li>
                    <li className='drawer-list'>
                        <img className='icon-imgs' src={ProfileIcon} alt="profile" />
                        <span>Profile</span>
                    </li>
                    <li className='drawer-list'>
                        <img className='icon-imgs' src={SubsIcon} alt="subs" />
                        <span>Subscriptions</span>
                    </li>
                    <li className='drawer-list'>
                        <img className='icon-imgs' src={LogoutIcon} alt="logout" />
                        <span>Logout</span>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Drawer;