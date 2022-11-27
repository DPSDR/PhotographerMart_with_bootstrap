import React from 'react';
import useData from '../../../hooks/useData';
import HomeImage from './HomeImage';

const HomeImages = () => {
    const [data] = useData();
    const sliceData = data.slice(0, 6);
    return (
        <div className="container" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
            <h2 className='text-secondary text-uppercase fs-1'>Look Our Project</h2>
            <div className='bg-warning w-25 mt-3' style={{ height: '2px' }}></div>
            <div className='row g-5 mt-1'>
                {
                    sliceData.map(singleData => <HomeImage
                        key={singleData.id}
                        singleData={singleData}
                    ></HomeImage>)
                }
            </div>
        </div>
    );
};

export default HomeImages;