import React from 'react';
import useData from '../../../hooks/useData';
import Service from '../Service/Service';

const Services = () => {
    const [data] = useData();
    return (
        <div className="container mb-5" style={{ marginTop: '6rem' }}>
            <h2 className='text-secondary'>Types of services..</h2>
            <div className='row g-5 mt-1'>
                {
                    data.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;