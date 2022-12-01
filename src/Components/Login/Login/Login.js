import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const [validated, setValidated] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
        console.log(user)
    }

    return (
        <div className="" style={{ marginTop: '7rem', marginBottom: '5rem' }}>
            <Form noValidate validated={validated} className='w-25 mx-auto form-container'>
                <h3 className='text-black mb-4'>Login</h3>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button onClick={handleLogIn} className='w-100 mb-4' variant="warning" type="submit">
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