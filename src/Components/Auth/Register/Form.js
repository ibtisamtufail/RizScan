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

const steps = ['Basic Information', 'Store Information', 'Payment Information'];

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [billCheck, setBillCheck] = useState(false);

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

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
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
                                    <TextField className='text-fields' size='small' id="outlined-basic" label="First Name" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField className='text-fields' size='small' id="outlined-basic" label="Last Name" variant="outlined" />
                                </Grid>
                            </Grid><br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField className='text-fields' size='small' id="outlined-basic" label="Email" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField className='text-fields' size='small' id="outlined-basic" label="Mobile" variant="outlined" />
                                </Grid>
                            </Grid><br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField className='text-fields' size='small' id="outlined-basic" label="Password" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField className='text-fields' size='small' id="outlined-basic" label="Confirm Password" variant="outlined" />
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
                                        <TextField className='text-fields' size='small' id="outlined-basic" label="Business Name" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <TextField className='text-fields' size='small' id="outlined-basic" label="Business Address" variant="outlined" />
                                    </Grid>
                                </Grid><br />
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <TextField className='text-fields' size='small' id="outlined-basic" label="City" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <TextField className='text-fields' size='small' id="outlined-basic" label="State" variant="outlined" />
                                    </Grid>
                                </Grid><br />
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <TextField className='text-fields' size='small' id="outlined-basic" label="Zip Code" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <TextField className='text-fields' size='small' id="outlined-basic" label="Mobile" variant="outlined" />
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
                                            <TextField className='text-fields' size='small' id="outlined-basic" label="Billing Address" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <TextField className='text-fields' size='small' id="outlined-basic" label="City" variant="outlined" />
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <TextField className='text-fields' size='small' id="outlined-basic" label="State" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <TextField className='text-fields' size='small' id="outlined-basic" label="Zip Code" variant="outlined" />
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
                                    <TextField className='text-fields' size='small' id="outlined-basic" label="Name on Card" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField className='text-fields' size='small' id="outlined-basic" label="Card Number" variant="outlined" />
                                </Grid>
                            </Grid><br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField className='text-fields' size='small' id="outlined-basic" label="Expiry" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField className='text-fields' size='small' id="outlined-basic" label="Cvv" variant="outlined" />
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

                        <Button variant="contained" onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}