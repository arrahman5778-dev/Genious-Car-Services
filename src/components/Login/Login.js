import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <div className='flex justify-center'>
      <div >
        <h2 className=' text-2xl font-bold pb-4'>Let’s Login Here</h2>
        <form action="">
          <div className="input-group pb-3">
            <label htmlFor="email" className='block  text-base pb-2'>Email </label>
            <input type="email" name="email" id="" />
          </div>
          <div className="input-group ">
            <label htmlFor="password" className='block text-base pb-2'>Password </label>
            <input type="password" name="password " className=' ' id="" />
          </div>
          <button className='login-btn text-base font-bold white'>Login</button>
        </form>
       <div className='bottom-text text-base mt-3'>
       <p >Forgte Password</p>
        <p>Create Account</p>
        <div className='or-login-option text-center relative mt-2 white'>or</div>
       </div>
      </div>
    </div>
  );
};

export default Login;