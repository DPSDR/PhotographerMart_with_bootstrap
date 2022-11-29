import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className="" style={{ marginTop: '7rem', marginBottom: '5rem' }}>
            <Form className='w-25 mx-auto form-container'>
                <h3 className='text-black mb-4'>Login</h3>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button className='w-100 mb-4' variant="warning" type="submit">
                    Login
                </Button>
                <p className='text-center'>Don't have an account? <Link to='/register' className="text-warning">Please Register</Link></p>
                <div className='d-flex justify-content-center align-items-baseline'>
                    <div className='w-50 bg-secondary' style={{ height: '2px' }} ></div>
                    <p className='mx-2'>Or</p>
                    <div className='w-50 bg-secondary' style={{ height: '2px' }} ></div>
                </div>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Login;