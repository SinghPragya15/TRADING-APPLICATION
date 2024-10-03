const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    mobileNumber: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: String,
        required: true
    },
    otpExpiresAt: {
        type: Date,
        required: true
    },
    // email and password can be optional if using OTP
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
