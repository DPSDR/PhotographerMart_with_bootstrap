import React from 'react';

const HomeImage = (props) => {
    const { img } = props.singleData;
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
            </div>
        </div>
    );
};

export default HomeImage;