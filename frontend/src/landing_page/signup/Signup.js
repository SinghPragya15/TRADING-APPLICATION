import React, { useState } from 'react';

const LoginWithOTP = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const requestOtp = async () => {
        const response = await fetch('http://localhost:5000/api/auth/generate-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mobileNumber }),
        });

        const data = await response.json();
        if (response.status === 200) {
            setOtpSent(true);
            setMessage('OTP sent successfully!');
        } else {
            setMessage(data.message);
        }
    };

    const verifyOtp = async () => {
        const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mobileNumber, otp }),
        });

        const data = await response.json();
        if (response.status === 200) {
            setMessage('Login successful!');
            localStorage.setItem('token', data.token);  // Store token locally
        } else {
            setMessage(data.message);
        }
    };

    return (
        <div className='container mt-5' style={{marginLeft:'20%'}}>
            <div className='row'>
                <div className='col-6'>
             <img src='media/signup.png' alt='signup'/>
                </div>
        <div className='col-6' >
            <h2>Signup Now</h2>
                <h3 className='mb-5 text-muted'>Or track your existing application.</h3>
            {!otpSent ? (
                <div>
                    <input
                        type="text"
                        placeholder="Enter Mobile Number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                </div>
            ) : (
                <div>
                    <input 
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <br/>
                    <button onClick={verifyOtp}>Verify OTP</button>
                </div>
            )}
            {message && <p>{message}</p>}
            <h6>You will receive an OTP on your number</h6>
            <button onClick={requestOtp} className='mt-4' style={{background:'#0000FF',color:'white'}}>Continue</button>
        </div>
        </div>
        <div className='row text-muted'>
            <p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.</p>
            <p style={{marginLeft:'30%'}}>Please visit <a href=''>this article </a>to know more.  </p>
        <p className='mt-3'>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, <a href=''>click here.</a></p>
        </div>
        </div>
    );
};

export default LoginWithOTP;
