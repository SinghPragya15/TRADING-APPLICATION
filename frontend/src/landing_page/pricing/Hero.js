import React from 'react'

function Hero() {
    return (
        
        <div className='container'>
          <div className='row p-5 mt-5 border-bottom text-center mb-5'>
            <h1>Pricing</h1>
            <h3 className='text-muted mt-2'>Free equity investments and flat ₹20 intraday and F&O trades</h3>
          </div>
          <div className='row mt-5 p-5 border-bottom'>
            <div className='col text-center'>
              <img src='media/pricing0.svg' alt='Free Equity Delivery '/>
              <h5>Free Equity Delivery</h5>
              <h6 className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</h6>
            </div>
            <div className='col text-center'>
            <img src='media/intradaytrades.svg' alt='Free Equity Delivery '/>
              <h5>Intraday and F&O trades</h5>
              <h6 className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</h6>
            </div>
            <div className='col text-center'>
            <img src='media/pricingMF.svg' alt='Free Equity Delivery '/>
            <h5>Free direct MF</h5>
            <h6 className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</h6>
            </div>
          </div>
        </div>
      );
}

export default Hero;