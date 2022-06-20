import React from 'react';
import Cards from '../Cards/Cards';
import AddIcon from '../imgs/add.png';
import Drawer from '../../../../Layout/Drawer/Drawer';
import './StoreList.css';
import { useNavigate } from 'react-router-dom';

const StoreList = () => {
    const array = [1, 2, 3, 4, 5, 6];
    const navigation = useNavigate();

    return <div style={{ display: 'flex' }}>
        <section className='drawer-parent-container'>
            <Drawer />
        </section>
        <section className='dash-content-parent'>
            {/* <section className='dash-content-parent'>
                <span style={{ fontWeight: 'bold' }}>Please Select Store</span>
            </section> */}
            <section className='grid-parent-cards' style={{ marginTop: '1rem' }}>
                {
                    array?.map((item, index) => {
                        return <Cards key={index} />
                    })
                }
            </section>
            <section className='add-store-action-parent'>
                <img style={{ width: '40px' }} src={AddIcon} alt='add' />
                <span onClick={() => navigation('/addstore')} className='add-store-text'>Add Store</span>
            </section>
        </section>
    </div>
}

export default StoreList