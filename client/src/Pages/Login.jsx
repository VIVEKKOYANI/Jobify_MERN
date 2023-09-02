import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='email' name='email' defaultValue='vivek.koyani@gmail.com' />
        <FormRow type='password' name='password' defaultValue='vivek123' />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <button type='button' className='btn btn-block'>
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>Register</Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Login