import React from 'react';
import useData from '../../../hooks/useData';
import Image from '../../Image/Image';

const Images = () => {
    const [data] = useData();
    console.log(data)
    return (
        <div className="container mb-5" style={{ marginTop: '6rem' }}>
            <h2 className='text-secondary'>Look Our Project...</h2>
            <div className='row g-5 mt-1'>
                {
                    data.map(image => <Image
                        key={image.id}
                        image={image}
                    ></Image>)
                }
            </div>
        </div>

    );
};

export default Images;