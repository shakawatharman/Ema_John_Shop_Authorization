import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Login = () => {

const {  signInUsingGoogle }= useAuth();
const location = useLocation();
const history = useHistory();
const redirectURL = location.state?.from || '/shop'; 


const handleGoogleSignIn=()=>{
  signInUsingGoogle()
  .then((result) => {
    history.push(redirectURL)
  });
}
  return (
    <div className="log-in">
      <div>
        <h2>Please Log in...</h2>
        <div>
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br />
          <input type="submit" value="Submit" />
        </div>
        <p>
          New to ema-john? <Link to="/register">Create Account</Link>
        </p>
        <div>----------or----------</div>
        <button onClick={handleGoogleSignIn} className="btn-regular">Google Sign In</button>
      </div>
    </div>
  );
};

export default Login;
