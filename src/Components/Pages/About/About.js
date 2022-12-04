import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import './About.css'

const About = () => {
    return (
        <div className='text-center' style={{ margin: "10rem 0 6rem 0" }}>
            <div className="container mx-auto row g-2">
                <div className="text-md-start col-md-6">
                    <div className="card-body">
                        <h6 className="card-title mb-2 text-uppercase">Hello Everybody, I am</h6>
                        <h1 className="card-title mb-2 text-uppercase fw-bold">Dipta Banik</h1>
                        <h4 className="card-title mb-3 text-uppercase">Junior React Developer</h4>
                        <p className="card-text">Currently I am studying and doing part time coding. I want to be an IT expert in future. And I am hopeful that somday I will be. Later reading this you will get motivated from me 😉</p>

                        <p className="card-text"><small className="text-muted">One of the motivating line that always inspires me...</small></p>

                        <blockquote className="quote-box">
                            <p className="quotation-mark text-secondary">
                                “
                            </p>
                            <em className="quote-text text-secondary ms-4">
                                You got a dream, you have to protect it
                                When people can't do something themselves,
                                they're gonna tell you that you can't do it.
                                You want something, go get it. Period. - Will Smith
                            </em>
                        </blockquote>

                    </div>
                </div>
                <div className="col-md-6">
                    <Zoom>
                        <img src="https://i.ibb.co/whKPqRM/photo-2022-11-28-15-23-50.jpg" className="img-fluid rounded-start w-50 mt-3" alt="..." />
                    </Zoom>
                </div>
            </div>

        </div>
    );
};

export default About;