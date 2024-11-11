import React from 'react'

function LeftSection({imageURL,productName,productDescription,tryDemo,LearnMore,googlePlay,appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageURL}/> </div>
                <div className='col-6' style={{marginTop:"55px"}}>
                    <h1 >{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={tryDemo}   style={{marginRight:"65px",textDecoration:"none"}}>{tryDemo}<i className='fa fa-long-arrow-right'></i></a>
                    <a href={LearnMore} style={{textDecoration:"none"}}>{LearnMore}<i className='fa fa-long-arrow-right'></i></a><br/>
                    <a href={googlePlay}style={{marginRight:"15px"}}><img src='media/googlePlayBadge.svg' alt='google Play'/></a>
                    <a href={appStore}  style={{marginRight:"15px"}}><img src="media/appstoreBadge.svg" /></a>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;