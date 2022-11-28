import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const HomeImage = (props) => {
    const { img } = props.singleData;
    return (
        <div className="col-md-4">
            <div className="card">
                <Zoom>
                    <img src={img} className="card-img-top" alt="..." />
                </Zoom>
            </div>
        </div>
    );
};

export default HomeImage;