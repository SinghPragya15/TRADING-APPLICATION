import React from 'react'
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Hero from './Hero';

function ProductPage() {
    return ( 
        <> 
        <Hero/>
        <LeftSection imageURL="media/kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="Try Demo" LearnMore="Learn more" googlePlay="google Play" appStore="appStore"/>
        <RightSection imageURL="media/console.png" productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." Learnmore="Learn more"/>
        <LeftSection imageURL="media/coin.png" productName="Coin" productDescription=" Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="Coin" LearnMore="Learn more" googlePlay="google Play" appStore="appStore"/>
        <RightSection imageURL="media/kiteconnect.png" productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." Learnmore="Kite Connect"/>
        <LeftSection imageURL="media/varsity.png" productName="Varsity" productDescription="An easy to grasp,collection of stock market lessons with in-depth colverage and illustration. Content is broken down into bitepsize cards to help you learn on the go." tryDemo="Try Demo" LearnMore="Learn more" googlePlay="google Play" appStore="appStore"/>  
        <p style={{textAlign:'center',fontSize:"25px"}}>Want to know more about our technology stack? Check out the<a href='' style={{textDecoration:"none"}}> Zerodha.tech</a> blog.</p>
        <Universe/>
        </>
     );
}

export default ProductPage;