import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const NotFound = () => {
    return (
        <div className='container' style={{ marginTop: '7rem', marginBottom: '5rem' }}>
            <h2 className='text-center text-secondary mb-3'>Page Not Found</h2>
            <h3 className='text-center text-secondary mb-3'>Photographer is sleeping.</h3>
            <Zoom>
                <img className='rounded img-fluid' src="https://i.ibb.co/my9m3G8/NotFound.jpg" alt="" />
            </Zoom>
        </div>
    );
};

export default NotFound;