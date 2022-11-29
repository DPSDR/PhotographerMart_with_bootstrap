import React from 'react';

const HowWeWork = () => {
    return (
        <div className="container px-4">
            <h2 className='text-secondary text-uppercase fs-1'>How We Work</h2>
            <div className='bg-warning w-25 mt-3 mb-5' style={{ height: '2px' }}></div>
            <div className="row g-5 text-center">
                <div className="col-md-6 col-sm-12">
                    <img className='img-fluid' src={"https://i.ibb.co/T8pxykh/commercial-photography-service.png"} alt="" />
                </div>
                <div className="col-md-6 col-sm-12 text-start">
                    <div className='d-flex align-items-center mb-4'>
                        <div class="elementor-icon-box-icon">
                            <span class="elementor-icon elementor-animation-bounce-out">
                                <i className="fa fa-book bootstrap-icon" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div>
                            <h3>01. Booking</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec eu lobortiser.</p>
                        </div>
                    </div>

                    <div className='d-flex align-items-center mb-4'>
                        <div class="elementor-icon-box-icon">
                            <span class="elementor-icon elementor-animation-bounce-out">
                                <i className="fa fa-camera-retro" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div>
                            <h3>02. Photoshoot</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec eu lobortiser.</p>
                        </div>
                    </div>

                    <div className='d-flex align-items-center'>
                        <div class="elementor-icon-box-icon">
                            <span class="elementor-icon elementor-animation-bounce-out">
                                <i className="fa fa-area-chart bootstrap-icon" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div>
                            <h3>03. Ready to download photo</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec eu lobortiser.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HowWeWork;