import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import './Register.css';

const Register = ({ component = 'Register' }) => {
    const [billCheck, setBillCheck] = useState(false);

    return (
        <div style={{ paddingBottom: '3rem' }}>
            {component === 'Register' && <h1 className='Login-heading'>Register</h1>}
            {component === 'AddStore' && <h1 className='Login-heading'>Add Store</h1>}
            {component === 'UpdateStore' && <h1 className='Login-heading'>Update Store or Payment Information</h1>}
            <section className='grid-parent'>
                <Box>
                    {
                        component === 'Register' &&
                        <>
                            <h3 className='basic-heading'>Basic Information</h3>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="First Name" variant="outlined" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="Last Name" variant="outlined" />
                                </Grid>
                            </Grid><br />
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="Email" variant="outlined" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="Mobile" variant="outlined" />
                                </Grid>
                            </Grid><br />
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="Password" variant="outlined" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="Confirm Password" variant="outlined" />
                                </Grid>
                            </Grid>
                        </>
                    }
                </Box>
            </section>
            <section className='grid-parent'>
                <Box>
                    <h3 className='basic-heading'>Store Information</h3>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="Business Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="Business Address" variant="outlined" />
                        </Grid>
                    </Grid><br />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="City" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="State" variant="outlined" />
                        </Grid>
                    </Grid><br />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="Zip Code" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="Mobile" variant="outlined" />
                        </Grid>
                    </Grid>
                    <div className='bill-chk action-parent-reg'>
                        <FormControlLabel onChange={() => setBillCheck(!billCheck)} control={<Checkbox />} label="Different Billing Address" />
                    </div>
                    {
                        billCheck &&
                        <>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="Billing Address" variant="outlined" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="City" variant="outlined" />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="State" variant="outlined" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="Zip Code" variant="outlined" />
                                </Grid>
                            </Grid>
                        </>
                    }
                </Box>
            </section>
            <section className='grid-parent'>
                <Box>
                    <h3 className='basic-heading'>Payment Information</h3>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="Name on Card" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="Card Number" variant="outlined" />
                        </Grid>
                    </Grid><br />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="Expiry" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField style={{ width: '300px' }} size='small' id="outlined-basic" label="Cvv" variant="outlined" />
                        </Grid>
                    </Grid><br />
                </Box>
            </section>
            <section className='grid-parent-action'>
                <div className='action-parent-reg'>
                    <FormControlLabel control={<Checkbox />} label="I agree to the terms & conditions" />
                </div>
                <br />
                <div className='reg-btn-parent'>
                    {component === 'Register' && <Button variant="contained">Register</Button>}
                    {component === 'AddStore' && <Button variant="contained">Confirm</Button>}
                    {component === 'UpdateStore' && <Button variant="contained">Update</Button>}
                </div>
            </section>
        </div>
    )
}

export default Register;