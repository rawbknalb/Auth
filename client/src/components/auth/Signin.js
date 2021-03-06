import React from "react";
import { Link } from "react-router-dom";

import SignInForm from "./forms/SignInForm";

const SignIn = () => (
  <div>
    <h1>Sign in to *Name*</h1>
    <div className="panel panel-default">
      <div className="panel-body">
        <SignInForm />      
      </div>
    </div>
    New to *Name*? <Link to="/signup">Create an account.</Link>
  </div>
);

export default SignIn;
