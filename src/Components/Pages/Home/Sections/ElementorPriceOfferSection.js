import React from 'react';
import { FiBook } from "react-icons/fi";
import { HiPhone } from "react-icons/hi";

const ElementorPriceOfferSection = () => {
    return (
        <div>
            <div className='text-center' style={{ margin: "6rem 0 6rem 0" }}>
                <button className='website-btn me-4'><FiBook className='me-2' />Book Now</button>
                <button className='website-btn ms-4'><HiPhone className='me-2' />Call Us</button>
            </div>
            <div className='intro-section text-center text-white'>
                <h3 className='pt-5'>Great photography shouldn't be so hard.</h3>
                <h1 className='my-4'>PhotgrapherMart</h1>
                <button className='website-btn me-4'><FiBook className='me-2' />Book Now</button>
            </div>
        </div>
    );
};

export default ElementorPriceOfferSection;