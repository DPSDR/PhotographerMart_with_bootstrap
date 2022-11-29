import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div className="" style={{ marginTop: '7rem', marginBottom: '5rem' }}>
            <Form className='w-25 mx-auto form-container'>
                <h3 className='text-black mb-4'>Create an account</h3>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="ex: Jhon" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="ex: Cena" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="ex: jhoncena1@gmail.com" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button className='w-100 mb-4' variant="warning" type="submit">
                    Register
                </Button>
                <p className='text-center'>Already have an account? <Link to='/login' className="text-warning">Please Login</Link></p>
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

export default Register;