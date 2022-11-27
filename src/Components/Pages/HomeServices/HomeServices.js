import React from 'react';
import useData from '../../../hooks/useData';
import HomeService from './HomeService';

const HomeServices = () => {
    const [data] = useData();
    const sliceData = data.slice(0, 3);
    return (
        <div>
            <div className="container" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
                <h2 className='text-secondary text-uppercase fs-1'>What We Offer</h2>
                <div className='bg-warning w-25 mt-3' style={{ height: '2px' }}></div>
                <div className='row g-5 mt-1'>
                    {
                        sliceData.map(singleData => <HomeService
                            key={singleData.id}
                            singleData={singleData}
                        ></HomeService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeServices;