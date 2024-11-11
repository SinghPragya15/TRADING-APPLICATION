import React from 'react'

function RightSection({imageURL,productName,productDescription,Learnmore}) {
    return ( 
        <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 mt-5'>
                <h1 style={{marginTop:"100px"}} >{productName}</h1>
                <p>{productDescription}</p>
                <a href={Learnmore} style={{textDecoration:"none"}}>{Learnmore}<i className='fa fa-long-arrow-right'></i></a><br/>
                </div>
            <div className='col-6'>
            <img src={imageURL} alt="image depicting the topic"/>
            </div>
        </div>
    </div>
     );
}

export default RightSection;