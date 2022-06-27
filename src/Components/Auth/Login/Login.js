import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';
import WithAuth from '../../HOC/Hoc';
import { LoginAPiURL } from '../../Apis/Apis';
import axios from 'axios';
import { showAlert } from '../../AlertMessage/AlertFunction';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';
import { setAuthData } from '../../Redux/AuthSlice';
import "./Login.css";

const Login = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [option, setOption] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const loginUser = async () => {
    let obj = { email_address: email, password };
    try {
      setLoader(true);
      const { data } = await axios.post(LoginAPiURL, obj);
      if (data) setLoader(false);
      if (data?.response) showAlert('error', data?.response);
      else {
        showAlert('success', 'Login Successful');
        dispatch(setAuthData(data))
      }
    } catch (error) {
      setLoader(false);
      showAlert('error', 'Something went wrong');
    }
  }

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
              <TextField onChange={(e) => setEmail(e.target.value)} style={{ width: '350px' }} size='small' id="outlined-basic" label="Email" variant="outlined" /><br /><br />
              <TextField onChange={(e) => setPassword(e.target.value)} style={{ width: '350px' }} size='small' id="outlined-basic" label="Password" variant="outlined" />
            </React.Fragment>
          }
        </section>
        <section className='action-parent'>
          <Button onClick={loginUser} variant="contained">
            {
              loader ? <CircularProgress size="1.5rem" style={{ color: 'white' }} />
                :
                'Login'
            }
          </Button>
          {
            option === 1 &&
            <span onClick={() => navigation('/forgetPassword')} style={{ textAlign: 'center', marginTop: '10px', cursor: 'pointer' }}>Forget Password</span>
          }
        </section>
      </section>
    </div>
  </React.Fragment>
}

export default WithAuth(Login, 'RDTUM');