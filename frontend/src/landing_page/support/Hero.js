import React from 'react'

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
          <div className='p-3 mt-5' id='supportWrapper'>
            <h3>Support Portal</h3>
            <a href='' style={{color:"white"}}>Track Tickets</a>
          </div>
          <div className='row p-3 mb-5' id='supportWrapper'>
            <div className='col-7 p-3 mb-5'>
              <h4 className='mb-4'>Search for an answer or browse help topics to create a ticket</h4>
              <input placeholder="Eg:how do i activate F&Q,why is my order getting rejected.."/><br/>
              <a href=''> Track account opening</a>
              <a href=''> Track segment activation </a>
              <a href=''> Intraday margins</a><br/>
              <a href=''> Kite user manual</a> 
            </div>
            <div className='col-5 p-3 mt-5 '>
              <h4>Featured</h4>
              <ol>
             <li> <a href=''>Surveillance measure on scrips - July 2024s</a><br/></li>
             <li><a href=''>Latest Intraday leverages and Square-off timings</a></li>
             </ol>
            </div>
          </div>
        </section>
      );
}

export default Hero;