import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GroupIcon from '../imgs/Group.png';
import './Cards.css';
import { useNavigate } from 'react-router-dom';

export default function BasicCard({ item }) {
    const navigation = useNavigate();

    return <div>
        <Card className='card-parent' sx={{ minWidth: 275 }}>
            <CardContent>
                <section style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0px', fontWeight: 'bold' }}>
                    <span>{item?.store_name}</span>
                    <span>{item?.store_id}</span>
                </section>
                <section className='address-text'>
                    <span>{item?.store_address}</span>
                    <span>{item?.store_city}</span>
                </section>
            </CardContent>
        </Card>
        <section className='cards-bottom-text-parent'>
            <span onClick={() => navigation(`/updatestore?store_id=${item?.store_id}`)} className='cards-bottom-text'>Update store or payent info</span>
            <img style={{ width: '18px' }} src={GroupIcon} alt='group' />
        </section>
    </div>
}