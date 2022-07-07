import React, { useState, useEffect} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./AdminCss/Login.css";
import { setLoader } from "../../Redux/LoaderSlice";
import { decrement, increment } from "../../Redux/counterSlice";
import { LoginAPiURL } from "../../Apis/Apis";
import { getUsersListAPiURL } from "../../Apis/Apis";
import axios from "axios"

const AdminLogin = () => {
  const [option, setOption] = useState(1);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const LoaderState = useSelector((state) => state.Loader.loading);
  console.log("getState of Loader ", LoaderState);

  const count = useSelector((state) => state.counter.value);


  const getAllPosts = async ()=>{
    try {
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts/3")
      dispatch(setLoader(data))
      console.log("data------->", data)
    } catch (error) {
      console.log(error)
    }
   
    
  }


  useEffect(() => {
    getAllPosts()
  }, [])
  

  return (
    <React.Fragment>
      <div className="login-fields-parent">
        <section>
          <h1 className="Login-heading">Admin Login</h1>
          <section className="option-parent">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <section
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "350px",
                }}
              >
                <FormControlLabel
                  onChange={() => setOption(1)}
                  value="female"
                  control={<Radio />}
                  label="Admin"
                />
                <FormControlLabel
                  onChange={() => setOption(2)}
                  value="male"
                  control={<Radio />}
                  label="Admin User"
                />
              </section>
            </RadioGroup>
          </section>
          <section style={{ marginTop: "1rem" }}>
            {option === 2 && (
              <React.Fragment>
                <TextField
                  style={{ width: "350px" }}
                  size="small"
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                />
                <br />
                <br />
                <TextField
                  style={{ width: "350px" }}
                  size="small"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </React.Fragment>
            )}
            {option === 1 && (
              <React.Fragment>
                <TextField
                  style={{ width: "350px" }}
                  size="small"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <br />
                <br />
                <TextField
                  style={{ width: "350px" }}
                  size="small"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </React.Fragment>
            )}
          </section>
          <section className="action-parent">
            <Button
              variant="contained"
              // onClick={() => dispatch(setLoader(!LoaderState))}
              // onClick={getAllPosts}
            >
              Login11
            </Button>
            {option === 1 && (
              <span
                onClick={() => {
                  navigation("/forgetPassword");
                }}
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
              >
                Forget Password
              </span>
            )}
          </section>
        </section>
      </div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </React.Fragment>
  );
};

export default AdminLogin;
