import React, { useState } from 'react';
import './Drawer.css';
import HomeIcon from './imgs/home.png';
import ProfileIcon from './imgs/profile.png';
import ReportsIcon from './imgs/reports.png';
import StoreIcon from './imgs/store.png';
import SubsIcon from './imgs/subs.png';
import UsersIcon from './imgs/users.png';
import LogoutIcon from './imgs/logout.png';
import { useNavigate } from 'react-router-dom';
import ReportDropListIcon from './imgs/reportd.png';
import ReportExtIcon from './imgs/reportExt.png';

const Drawer = () => {
    const navigation = useNavigate();
    const [reportDropdown, setReportDropdown] = useState(false);
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
                    <li className='drawer-list' onClick={() => navigation('/usermanagement')} >
                        <img className='icon-imgs' src={UsersIcon} alt="users" />
                        <span>Users</span>
                    </li>
                    <li className='drawer-list' onClick={() => setReportDropdown(!reportDropdown)}>
                        <img className='icon-imgs' src={ReportsIcon} alt="reports" />
                        <span>Reports</span>
                        <img className='img-icons' src={ReportExtIcon} alt="reports" />
                    </li>
                    {
                        reportDropdown &&
                        <ul className='report-ul'>
                            <li onClick={() => navigation('/shiftreport')} style={{ fontSize: 'small' }}><img className='icon-imgs' src={ReportDropListIcon} alt="users" />Shift Report</li>
                            <li onClick={() => navigation('/onslotreports')} style={{ fontSize: 'small' }}><img className='icon-imgs' src={ReportDropListIcon} alt="users" />OnSlot Report</li>
                            <li onClick={() => navigation('/backofficereports')} style={{ fontSize: 'small' }}><img className='icon-imgs' src={ReportDropListIcon} alt="users" />BackOffice Report</li>
                            <li onClick={() => navigation('/returnsreport')} style={{ fontSize: 'small' }}><img className='icon-imgs' src={ReportDropListIcon} alt="users" />Returns Report</li>
                            <li onClick={() => navigation('/salesreport')} style={{ fontSize: 'small' }}><img className='icon-imgs' src={ReportDropListIcon} alt="users" />Sales Report</li>
                        </ul>
                    }
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