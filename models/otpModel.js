const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
});

const Otps = mongoose.model('otps', otpSchema);

module.exports = Otps;