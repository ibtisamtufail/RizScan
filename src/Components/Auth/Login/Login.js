import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const [option, setOption] = useState(1);
  const navigation = useNavigate();
  return <React.Fragment>
    <div className='login-fields-parent'>
      <section>
        <h1 className='Login-heading'>Dashboard Login</h1>
        <section className='option-parent'>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <section style={{ display: 'flex', justifyContent: 'center', width: '350px' }}>
              <FormControlLabel onChange={() => setOption(1)} value="female" control={<Radio />} label="Store Owner" />
              <FormControlLabel onChange={() => setOption(2)} value="male" control={<Radio />} label="Store Manager" />
            </section>
          </RadioGroup>
        </section>
        <section style={{ marginTop: '1rem' }}>
          {
            option === 2 &&
            <React.Fragment>
              <TextField style={{ width: '350px' }} size='small' id="outlined-basic" label="Store ID" variant="outlined" /><br /><br />
              <TextField style={{ width: '350px' }} size='small' id="outlined-basic" label="Username" variant="outlined" /><br /><br />
              <TextField style={{ width: '350px' }} size='small' id="outlined-basic" label="Password" variant="outlined" />
            </React.Fragment>
          }
          {
            option === 1 &&
            <React.Fragment>
              <TextField style={{ width: '350px' }} size='small' id="outlined-basic" label="Email" variant="outlined" /><br /><br />
              <TextField style={{ width: '350px' }} size='small' id="outlined-basic" label="Password" variant="outlined" />
            </React.Fragment>
          }
        </section>
        <section className='action-parent'>
          <Button variant="contained">Login</Button>
          <span onClick={() => navigation('/forgetPassword')} style={{ textAlign: 'center', marginTop: '10px', cursor: 'pointer' }}>Forget Password</span>
        </section>
      </section>
    </div>
  </React.Fragment>
}

export default Login;