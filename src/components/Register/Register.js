import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="log-in">
      <div>
        <h2>Create new account</h2>
        <div>
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Re-enter Password"
          />
          <br />
          <input type="submit" value="Submit" />
        </div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <div>-------------or-------------</div>
        <button className="btn-regular">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
