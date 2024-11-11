import React from 'react'
import Stats from './Stats';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccounts from '../OpenAccounts';
function HomePage() {
    return ( 
        <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccounts/>
        </>
     );
}

export default HomePage;