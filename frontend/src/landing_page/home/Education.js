import React from 'react'

function Education() {
    return ( 
      
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/education.svg' />
                </div>
                    <div className='col-6 mt-5'>
                    <h1 className='mb-3'> Free and open market education.  </h1>
                        <p>Varsity, the largest stock market education book in the world<br/> covering the everything from the besics to the advanced training
                        </p>
                        <a href='' style={{textDecoration:'none'}}>Versity<i className='fa fa-long-arrow-right'></i></a>
                          <p className='mt-5'>Trading Q&A,the most active trading and investment community in India for all your market related queries.</p>
                            <a href='' style={{textDecoration:'none'}}>Trading Q&A<i className='fa fa-long-arrow-right'></i></a>
                    </div>
                
            </div>
        </div>
     );
}

export default Education;