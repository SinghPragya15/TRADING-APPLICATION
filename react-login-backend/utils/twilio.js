const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

exports.sendOTP = (mobileNumber, otp) => {
    return client.messages.create({
        body: `Your OTP is ${otp}`,
        to: `+${mobileNumber}`,  // Ensure the phone number includes the country code
        from: process.env.TWILIO_PHONE_NUMBER  // Twilio phone number
    });
};
