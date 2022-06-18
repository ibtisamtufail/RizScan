import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ProfileIcon from './imgs/profile.png';
import EditIcon from './imgs/edit.png';
import DelIcon from './imgs/del.png';
import './Management.css';

const card = (
    <React.Fragment>
        <div>
            <section className='card-parent-user'>
                <CardContent>
                    <section className='profile-card-parent'>
                        <img className='profile-user-icon' src={ProfileIcon} />
                        <span className='profile-user-name-text'>John</span>
                    </section>
                </CardContent>
                <CardActions className='action-parent-user'>
                    <span className='card-actiob-text-user'>Cashier</span>
                </CardActions>
            </section>
        </div>
    </React.Fragment>
);

export default function OutlinedCard({ setAction }) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
            <section className='bottom-action-parent-parent'>
                <div className='bottom-action-parent'>
                    <span onClick={() => setAction({ open: true, type: 'Update' })} className='bottom-text-user-action blue'>Update</span>
                    <img className='bottom-action-img-user' src={EditIcon} />
                </div>
                <div className='bottom-action-parent'>
                    <span className='bottom-text-user-action red'>Delete</span>
                    <img className='bottom-action-img-user' src={DelIcon} />
                </div>
            </section>
        </Box>
    );
}