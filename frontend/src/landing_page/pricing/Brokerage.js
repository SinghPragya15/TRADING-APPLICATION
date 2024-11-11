import React from 'react'

function Brokerage() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8 mb-3'>
                   <p className='text-center'> <a className='fs-5' style={{textDecoration:"none"}} href=''>Brokerage calculator</a></p>
                    <ul className='mt-3 text-muted'>
                        <li style={{fontSize:"13px"}}>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li style={{fontSize:"13px"}}>Digital contract notes will be sent via e-mail.</li>
                        <li style={{fontSize:"13px"}}>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li style={{fontSize:"13px"}}>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li style={{fontSize:"13px"}}>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li style={{fontSize:"13px"}}>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 mb-3 text-center'>
                <a className='fs-5' style={{textDecoration:"none",textAlign:"center"}} href=''>List of charges</a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;