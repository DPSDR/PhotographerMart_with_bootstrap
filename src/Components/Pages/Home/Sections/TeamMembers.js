import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const TeamMembers = () => {
    return (
        <div className="container text-center" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
            <h2 className='text-secondary text-uppercase fs-1'>What We Offer</h2>
            <div className='bg-warning w-25 mx-auto mt-3' style={{ height: '2px' }}></div>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                <div className="col">
                    <div className="card">
                        <Zoom>
                            <img src="https://i.ibb.co/ygWsn99/t1.png" className="card-img-top" alt="..." />
                        </Zoom>
                        <div className="card-body">
                            <h5 className="card-title">Andrew Hoaking</h5>
                            <p className="card-text">Co-Founder</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Zoom>
                            <img src="https://i.ibb.co/yVZmGY3/t2.png" className="card-img-top" alt="..." />
                        </Zoom>
                        <div className="card-body">
                            <h5 className="card-title">Antony Martulen</h5>
                            <p className="card-text">Co-Founder</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Zoom>
                            <img src="https://i.ibb.co/hy1Ccvm/t3.png" className="card-img-top" alt="..." />
                        </Zoom>
                        <div className="card-body">
                            <h5 className="card-title">Adam Jhons</h5>
                            <p className="card-text">General manager</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TeamMembers;