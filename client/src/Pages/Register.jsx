import React from 'react'
import {Form, redirect, useNavigation ,Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';

export const action = async(data) => {
  console.log(data);
  return null;
}

function Register() {
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='vivek' />
        <FormRow type='text' name='location' defaultValue='earth' />
        <FormRow type='email' name='email' defaultValue='vivek.koyani@gmail.com' />
        <FormRow type='password' name='password' defaultValue='vivek123' />
        <FormRow type='text' name='name' defaultValue='vivek' />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>Login</Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Register