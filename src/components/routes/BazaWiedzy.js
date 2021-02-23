
import React from 'react' ;
import '../../App.css' ;
import MomSection from '../home/MomSection' ;
import BenefitsSection from '../home/BenefitsSection' ;
import FunctionsSection from '../home/FunctionsSection.js';
import ValuesSection from '../home/ValuesSection.js';
import AppStoreSection from '../home/AppStoreSection.js';
import Hero from '../home/Hero.js'
import CategoryNav from '../blog/CategoryNav';
import Articles from '../../Articles';
import Navbar from '../Navbar';

function Home() {
    return (
        <>
        {/* <Hero/> */}
        <Navbar/>
        <CategoryNav/>
        <Articles/>
        </>
    )
}

export default Home ;