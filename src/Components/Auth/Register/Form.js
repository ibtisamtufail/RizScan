import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { RegisterAPiURL } from '../../Apis/Apis';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { showAlert } from '../../AlertMessage/AlertFunction';
import { setAuthData } from '../../Redux/AuthSlice';
import CircularProgress from '@mui/material/CircularProgress';

const steps = ['Basic Information', 'Store Information', 'Payment Information'];

export default function HorizontalLinearStepper() {
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [billCheck, setBillCheck] = useState(false);
    // Basic information
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [mobile_number, setMobile_number] = useState('');
    const [password, setPassword] = useState('');
    const [email_address, setEmail_address] = useState('');
    const [confirm_password, setConfirm_password] = useState('');
    // store information
    const [store_name, setStore_name] = useState('');
    const [store_address, setStore_address] = useState('');
    const [store_city, setStore_city] = useState('');
    const [store_state, setStore_state] = useState('');
    const [store_zip, setStore_zip] = useState('');
    const [store_phone, setStore_phone] = useState('');
    const [subscription, setSubscription] = useState(2);
    // Billing
    const [billing_address, setBilling_address] = useState('');
    const [billing_city, setBilling_city] = useState('');
    const [billing_state, setBilling_state] = useState('');
    const [billing_zip, setBilling_zip] = useState('');
    const [selling_style, setSelling_style] = useState('asc');
    // payment information
    const [name_on_card, setName_on_card] = useState('');
    const [card_number, setCard_number] = useState('');
    const [card_expiry, setCard_expiry] = useState('');
    const [card_CVV, setCard_CVV] = useState(0);
    const [added_on, setAdded_on] = useState('');

    const registerCustomerFunc = async () => {
        let today = new Date();
        const dd = String(today.getDate());
        const mm = String(today.getMonth() + 1)
        const yyyy = today.getFullYear();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        today = mm + '-' + dd + '-' + yyyy + " " + hours + ':' + minutes + ':' + seconds;
        const Obj = {
            customer: { first_name, last_name, mobile_number, password, email_address },
            store: {
                store_name, store_address, store_city, store_zip, store_state, store_phone, subscription,
                billing_address, billing_city, billing_city, billing_state, billing_zip, selling_style
            },
            payment_detail: { name_on_card, card_number, card_expiry, card_CVV },
            added_on: today
        }
        try {
            setLoader(true);
            const { data } = await axios.post(RegisterAPiURL, Obj);
            if (data) {
                setLoader(false);
                dispatch(setAuthData(data));
                showAlert('success', 'Registration Successfull');
            }
        } catch (error) {
            setLoader(false);
            console.log(error);
            if (error?.response?.data?.message) {
                showAlert('error', error?.response?.data?.message);
            }
            else {
                showAlert('error', 'Something went wrong');
            }
        }
    }

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        if (activeStep === 0) {
            if (first_name === '' || last_name === '' || mobile_number === '' || password === '' || confirm_password === '' || email_address === '') {
                showAlert('error', 'Fields must not be empty');
            }
            else if (password !== confirm_password) {
                showAlert('error', 'Password must be same');
            }
            else {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
        }
        else if (activeStep === 1) {
            if (store_name === '' || store_address === '' || store_city === '' || store_state === '' || store_zip === '' || store_phone === '' || subscription === 0
                || billing_address === '' || billing_city === '' || billing_state === '' || billing_zip === '' || selling_style === '') {
                showAlert('error', 'Fields must not be empty');
            }
            else {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
        }
        else if (activeStep === 2) {
            if (name_on_card === '' || card_number === '' || card_expiry === '' || card_CVV === '') {
                showAlert('error', 'Fields must not be empty');
            }
            else {
                registerCustomerFunc();
            }
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        Thanks For Submitting
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {
                        activeStep === 0 &&
                        <React.Fragment>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item sm={6} xs={12} md={6}>
                                    <TextField value={first_name} onChange={(e) => setFirst_name(e.target.value)} className='text-fields' size='small' label="First Name" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField value={last_name} onChange={(e) => setLast_name(e.target.value)} className='text-fields' size='small' label="Last Name" variant="outlined" />
                                </Grid>
                            </Grid><br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField value={email_address} onChange={(e) => setEmail_address(e.target.value)} className='text-fields' size='small' label="Email" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField value={mobile_number} onChange={(e) => setMobile_number(e.target.value)} className='text-fields' size='small' label="Mobile" variant="outlined" />
                                </Grid>
                            </Grid><br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField value={password} onChange={(e) => setPassword(e.target.value)} className='text-fields' size='small' type='password' label="Password" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField value={confirm_password} onChange={(e) => setConfirm_password(e.target.value)} className='text-fields' size='small' type='password' label="Confirm Password" variant="outlined" />
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    }
                    {
                        activeStep === 1 && <>
                            <br />
                            <React.Fragment>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <TextField value={store_name} onChange={(e) => setStore_name(e.target.value)} className='text-fields' size='small' label="Business Name" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <TextField value={store_address} onChange={(e) => setStore_address(e.target.value)} className='text-fields' size='small' label="Business Address" variant="outlined" />
                                    </Grid>
                                </Grid><br />
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <TextField value={store_city} onChange={(e) => setStore_city(e.target.value)} className='text-fields' size='small' label="City" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <TextField value={store_state} onChange={(e) => setStore_state(e.target.value)} className='text-fields' size='small' label="State" variant="outlined" />
                                    </Grid>
                                </Grid><br />
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <TextField value={store_zip} onChange={(e) => setStore_zip(e.target.value)} className='text-fields' size='small' label="Zip Code" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <TextField value={store_phone} onChange={(e) => setStore_phone(e.target.value)} className='text-fields' size='small' label="Mobile" variant="outlined" />
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                            <div className='bill-chk action-parent-reg'>
                                <FormControlLabel onChange={() => setBillCheck(!billCheck)} control={<Checkbox />} label="Different Billing Address" />
                            </div>
                            <br />
                            {
                                billCheck &&
                                <React.Fragment>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <TextField value={billing_address} onChange={(e) => setBilling_address(e.target.value)} className='text-fields' size='small' label="Billing Address" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <TextField value={billing_city} onChange={(e) => setBilling_city(e.target.value)} className='text-fields' size='small' label="City" variant="outlined" />
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <TextField value={billing_state} onChange={(e) => setBilling_state(e.target.value)} className='text-fields' size='small' label="State" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <TextField value={billing_zip} onChange={(e) => setBilling_zip(e.target.value)} className='text-fields' size='small' label="Zip Code" variant="outlined" />
                                        </Grid>
                                    </Grid>
                                </React.Fragment>
                            }
                        </>
                    }
                    {
                        activeStep === 2 &&
                        <React.Fragment>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField value={name_on_card} onChange={(e) => setName_on_card(e.target.value)} className='text-fields' size='small' label="Name on Card" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField value={card_number} onChange={(e) => setCard_number(e.target.value)} className='text-fields' size='small' label="Card Number" variant="outlined" />
                                </Grid>
                            </Grid><br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField value={card_expiry} onChange={(e) => setCard_expiry(e.target.value)} className='text-fields' size='small' label="Expiry" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField value={card_CVV} onChange={(e) => setCard_CVV(e.target.value)} className='text-fields' size='small' label="Cvv" variant="outlined" />
                                </Grid>
                            </Grid><br />
                        </React.Fragment>
                    }
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            // color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                            variant="contained"
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                {/* Skip */}
                            </Button>
                        )}
                        {
                            loader
                                ?
                                <CircularProgress />
                                :
                                <Button variant="contained" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                        }
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}