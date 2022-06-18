import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GroupIcon from '../imgs/Group.png';
import './Cards.css';
import { useNavigate } from 'react-router-dom';

export default function BasicCard() {
    const navigation = useNavigate();
    return <div>
        <Card className='card-parent' sx={{ minWidth: 275 }}>
            <CardContent>
                <section style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0px', fontWeight: 'bold' }}>
                    <span>STORE 1</span>
                    <span>12345</span>
                </section>
                <section className='address-text'>
                    <span>123 Main St</span>
                    <span>Lahorw, Pak</span>
                </section>
            </CardContent>
        </Card>
        <section className='cards-bottom-text-parent'>
            <span onClick={()=>navigation('/updatestore')} className='cards-bottom-text'>Update store or payent info</span>
            <img style={{ width: '18px' }} src={GroupIcon} alt='group' />
        </section>
    </div>
}