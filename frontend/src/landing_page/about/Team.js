import React from 'react'

function Team() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 border-top'>
                <h1 className='mt-5' style={{ textAlign: "center" }}>
                    People
                </h1>
            </div>


            <div className='row p-5 mt-5'>
                <div className='col-6 text-center text-muted'>
                    <img src='media/nithinkamath.jpg' alt='Founder of Zerodha' className='mb-5' style={{ borderRadius: "100%",width:"60%" }} />
                    <h2 className='fs-5'>Nithin Kamath</h2>
                    <p>Founder, CEO</p>
                </div>
                <div className='col-6  text-muted text-center'>
                    <p style={{ textAlign: 'left', fontSize: "20px" }}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p style={{ textAlign: 'left', fontSize: "20px" }}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p style={{ textAlign: 'left', fontSize: "20px" }}>Playing basketball is his zen.</p>
                    <p style={{ textAlign: 'left', fontSize: "20px" }}>Connect on <a href='' style={{ textDecoration: "none" }}> Homepage </a>/ <a href='' style={{textDecoration:"none"}}> TradingQnA  </a>/ <a href='' style={{textDecoration:"none"}}> Twitter </a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;