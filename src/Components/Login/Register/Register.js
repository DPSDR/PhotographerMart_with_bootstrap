import React, { useState } from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [createUserWithEmailAndPassword, error] = useCreateUserWithEmailAndPassword(auth);
    const [validated, setValidated] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const handleUser = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password)
        }
        else {
            return (
                <div>
                    <p>Error:</p>
                </div>
            );
        }
    }
    return (
        <div style={{ marginTop: '7rem', marginBottom: '5rem' }}>
            <Form noValidate validated={validated} className='w-25 mx-auto form-container'>
                <h3 className='text-black mb-4'>Create an account</h3>
                <Form.Group className="mb-4" controlId="formBasicText">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="ex: Jhon" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicText">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="ex: Cena" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="ex: jhoncena1@gmail.com" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Password" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button onClick={handleUser} className='w-100 mb-4' variant="warning" type="submit">
                    Register
                </Button>

                {
                    error ? <p className='text-center text-danger mt-3'>{error.message}</p> : ''
                }

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