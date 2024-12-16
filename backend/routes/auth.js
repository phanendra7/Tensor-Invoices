// routes/auth.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

const { googleLogin, googleCallback } = require('../controllers/auth');

router.get('/google', googleLogin);

router.get('/google/callback', googleCallback);

module.exports = router;
