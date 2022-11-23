import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
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
                <img src={img} className="card-img-top" alt="..." />
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
                    <Button variant="outline-warning">Book a order</Button>
                </div>
            </div>
        </div>
    );
};

export default Service;