import React from 'react';

const Image = (props) => {
    const { img } = props.image;

    return (
        <div className="col-md-4">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
            </div>
        </div>
    );
};

export default Image;