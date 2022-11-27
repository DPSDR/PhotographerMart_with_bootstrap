import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#5c3c3c' }}>
            <div className="container text-center mt-5" style={{ color: '#ffffffb0' }}>
                <div className="row text-start">
                    <div className="col-md-4 col-sm-12 mt-4">
                        <Link className="fs-3 text-white text-decoration-none fw-semibold" to='/'>PhotographerMart</Link>
                        <p className='mt-3'><span className='fw-bold'>PhotographerMart</span> - is a team of enthusiasts who do their best to meet any client's demand and provide them with perfectly made photos.</p>
                    </div>

                    <div className="col-md-4 col-sm-12" style={{ marginTop: "2rem" }}>
                        <p className='md-ms-4 text-white'>Quick Links</p>
                        <ul className="ps-0" style={{ listStyleType: 'none' }}>
                            <li>
                                <CustomLink to='/home'>Home</CustomLink>
                            </li>
                            <li>
                                <CustomLink to='/images'>Images</CustomLink>
                            </li>
                            <li>
                                <CustomLink to='/services'>Services</CustomLink>
                            </li>
                            <li>
                                <CustomLink to='/blog'>Blog</CustomLink>
                            </li>
                            <li>
                                <CustomLink to='/about'>About</CustomLink>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-sm-12" style={{ marginTop: "2rem" }}>
                        <p className='text-white'>Service Offers</p>
                        <p>This is PhotographerMart. We connects you with pre-vetted
                            pro photographers for all of your needs
                            from $49 per booking.</p>
                    </div>
                </div>
                <div className="row mt-4 pb-4">
                    <div className="col-md-6">
                        <p className='mb-0'>Copyright &copy; 2022 React Project. All Rights Reserved. | Theme design by Dipta</p>
                    </div>
                    <div className="col-md-6 md-text-end">
                        Terms and conditions | Privacy Policy
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;