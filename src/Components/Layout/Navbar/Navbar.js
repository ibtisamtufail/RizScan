import React from 'react';
import './Navbar.css';
import Logo from './imgs/logo.png';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigation = useNavigate();
    return (
        <div className='header'>
            <div className='nav-container'>
                <section className='img-parent'>
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