import React from 'react'

function Universe() {
    return (
        <div className='container mt-5 text-center'>
          <div className='row'>
             <h1>The Zerodha Universe</h1>
             <p>Extend your trading and investment experience even further with our partner platforms</p>
             <div className='col-4 p-3'>
              <img style={{width:"240px"}} src='media/smallcaseLogo.png'/>  
             <p className='small-text text-muted mt-1'>Thematic investment platform</p>
             </div>
             <div className='col-4 p-3'>
              <img style={{width:"190px"}} src='media/streakLogo.png'/>
              <p className='small-text text-muted mt-1'>Algo & strategy platform</p>
               </div>
             <div className='col-4 p-4'>
              <img style={{width:"240px"}}src='media/sensibullLogo.svg'/> 
              <p className='small-text text-muted mt-1'>Options trading platform</p>
              </div>
          </div>
          <div className='row'>
          <div className='col-4 p-3'>
              <img style={{width:"240px"}} src='media/zerodhaFundhouse.png'/>  
             <p className='small-text text-muted mt-1'>Assest Managemet</p>
             </div>
             <div className='col-4 p-3'>
              <img style={{width:"190px"}} src='media/tijori.svg'/>
              <p className='small-text text-muted mt-1'>Fundamental Research platform</p>
               </div>
             <div className='col-4 p-4'>
              <img style={{width:"150px"}}src='media/dittoLogo.png'/> 
              <p className='small-text text-muted mt-1'>Insurance</p>
              </div>
          </div>
        </div>
      );
}

export default Universe;