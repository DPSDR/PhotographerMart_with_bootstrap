import React from 'react';
import { Button } from 'react-bootstrap';

const SocialLogin = () => {
    return (
        <div className='mt-4'>
            <Button variant="outline-warning w-100 text-black">Continue With Google</Button>
            <Button variant="outline-warning w-100 text-black mt-3">Continue With Facebook</Button>
        </div>
    );
};

export default SocialLogin;