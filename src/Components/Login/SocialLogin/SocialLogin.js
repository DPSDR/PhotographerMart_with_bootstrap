import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Modal from 'react-bootstrap/Modal';


const SocialLogin = () => {
    const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleGoogleSignIn = () => {
        signInWithGoogle();
        if (loading) {
            return <p>Loading...</p>;
        }
    }

    return (
        <div className='mt-4'>
            <Button onClick={handleGoogleSignIn} variant="outline-warning w-100 text-black d-flex justify-content-evenly align-items-center mb-4">
                <img style={{ width: "30px" }} src="https://i.ibb.co/wM2sgZz/google.png" alt="" />
                Continue With Google
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Oops! Sorry.</Modal.Title>
                </Modal.Header>
                <Modal.Body>Still we didn't impliment the Facebook login system.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Button onClick={handleShow} variant="outline-warning w-100 text-black d-flex justify-content-evenly">
                <img style={{ width: "30px" }} src="https://i.ibb.co/KzP2HKk/fb.png" alt="" />
                Continue With Facebook
            </Button>

            {
                error ? <p className='text-center text-danger mt-3'>{error.message}</p> : ''
            }
        </div>
    );
};

export default SocialLogin;