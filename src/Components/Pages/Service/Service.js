import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, description, img } = props.service;
    const [readMoreLess, setReadMoreLess] = useState(true);

    const toggleBtn = () => {
        setReadMoreLess(prevState => !prevState)
    }

    return (
        <div className="col-md-4">
            <div className="card border border-warning rounded">
                <Zoom>
                    <img src={img} className="card-img-top" alt="..." />
                </Zoom>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {
                            readMoreLess ?
                                description.substr(0, 200) + '... ' : description + '... '
                        }
                        <span className='readMoreLess' onClick={toggleBtn}>
                            {
                                readMoreLess ? '(Read More)' : '(Read Less)'
                            }
                        </span>
                    </p>
                    <Link to='/checkout'><Button variant="outline-warning">Book a order</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;