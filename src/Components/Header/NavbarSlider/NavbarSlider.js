import React from 'react';
import hero1 from '../../../images/slider/hero-1.jpg';
import hero2 from '../../../images/slider/hero-2.jpg';
import hero3 from '../../../images/slider/hero-3.jpg';

const NavbarSlider = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={hero1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Landspace Photography</h5>
                            <p>Photograhy is the art of capturing ligh with a camera, usually via a digital sensor or file, to create an image with the right camera.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={hero2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Wildlife Photography</h5>
                            <p>Photograhy is the art of capturing ligh with a camera, usually via a digital sensor or file, to create an image with the right camera.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={hero3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Travel Photography</h5>
                            <p>Photograhy is the art of capturing ligh with a camera, usually via a digital sensor or file, to create an image with the right camera.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default NavbarSlider;