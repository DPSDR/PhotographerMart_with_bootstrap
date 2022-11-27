import React from 'react';
import Header from '../../Header/Header/Header';
import './Home.css';
import HomeServices from '../HomeServices/HomeServices';
import ElementorPriceOfferSection from './Sections/ElementorPriceOfferSection';
import HowWeWork from './Sections/HowWeWork';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ElementorPriceOfferSection></ElementorPriceOfferSection>
            <HomeServices></HomeServices>
            <HowWeWork></HowWeWork>


        </div >
    );
};

export default Home;