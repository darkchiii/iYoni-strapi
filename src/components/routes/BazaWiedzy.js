
import React from 'react' ;
import '../../App.css' ;
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