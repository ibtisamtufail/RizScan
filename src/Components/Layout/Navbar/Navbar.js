import React from 'react';
import './Navbar.css';
import Logo from './imgs/logo.png';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {

    const ToggleDrawer = () => {
        let elem = document.getElementsByClassName('drawer-parent-container')[0];
        let condition = elem.classList.contains('drawer--open');
        if (condition) {
            elem.classList.remove('drawer--open');
        }
        else {
            elem.classList.add('drawer--open');
        }
    }

    const navigation = useNavigate();
    return (
        <div className='header'>
            <div className='nav-container'>
                <section className='img-parent'>
                    <span className='hamburger-icon' onClick={ToggleDrawer}><MenuIcon style={{ fill: 'white' }} /></span>
                    <img src={Logo} onClick={() => navigation('/')} alt="Logo" className='logo' />
                </section>
                <section className='nav-btn-parent'>
                    <button onClick={() => navigation('/login')} className='nav-btn'>Login</button>
                    <button onClick={() => navigation('/register')} className='nav-btn'>Register</button>
                </section>
            </div>
        </div>

    )
}

export default Navbar;