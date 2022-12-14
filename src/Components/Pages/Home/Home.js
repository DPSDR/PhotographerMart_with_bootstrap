import React from 'react';
import Header from '../../Header/Header/Header';
import './Home.css';
import HomeServices from '../HomeServices/HomeServices';
import ElementorPriceOfferSection from './Sections/ElementorPriceOfferSection';
import HowWeWork from './Sections/HowWeWork';
import HomeImages from '../HomeImages/HomeImages';
import TeamMembers from './Sections/TeamMembers';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ElementorPriceOfferSection></ElementorPriceOfferSection>
            <HomeServices></HomeServices>
            <HowWeWork></HowWeWork>
            <HomeImages></HomeImages>
            <TeamMembers></TeamMembers>
        </div >
    );
};

export default Home;