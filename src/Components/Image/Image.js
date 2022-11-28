import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Image = (props) => {
    const { img } = props.image;

    return (
        <div className="col-md-4">
            <div className="card">
                <Zoom>
                    <img src={img} className="card-img-top" width="500" alt="..." />
                </Zoom>
            </div>
        </div>
    );
};

export default Image;