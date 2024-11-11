const User = require('../models/Users');
const { generateOTP } = require('../utils/otp');
const { sendOTP } = require('../utils/twilio');
const jwt = require('jsonwebtoken');

// Generate OTP and send to user's mobile number
exports.generateOtpForLogin = async (req, res) => {
    const { mobileNumber } = req.body;

    try {
        // Check if the user exists
        let user = await User.findOne({ mobileNumber });

        if (!user) {
            // If user doesn't exist, create a new user entry
            user = new User({ mobileNumber });
        }

        // Generate OTP and expiration time
        const otp = generateOTP();
        const otpExpiresAt = Date.now() + 10 * 60 * 1000;  // OTP valid for 10 minutes

        user.otp = otp;
        user.otpExpiresAt = otpExpiresAt;
        await user.save();

        // Send OTP via SMS
        await sendOTP(mobileNumber, otp);

        res.status(200).json({ message: 'OTP sent to your mobile number' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Verify OTP
exports.verifyOtpForLogin = async (req, res) => {
    const { mobileNumber, otp } = req.body;

    try {
        const user = await User.findOne({ mobileNumber });

        if (!user || user.otp !== otp || Date.now() > user.otpExpiresAt) {
            return res.status(400).json({ message: 'Invalid OTP or OTP expired' });
        }

        // OTP verified, you can generate a token or session
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Optionally, clear the OTP after successful login
        user.otp = null;
        user.otpExpiresAt = null;
        await user.save();

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
