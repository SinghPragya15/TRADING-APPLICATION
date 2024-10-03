const express = require('express');
const { generateOtpForLogin, verifyOtpForLogin } = require('../controllers/authController');
const router = express.Router();

router.post('/generate-otp', generateOtpForLogin);
router.post('/verify-otp', verifyOtpForLogin);

module.exports = router;
