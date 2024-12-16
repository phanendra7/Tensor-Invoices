const passport = require('passport');
const googleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });
const googleCallback = (req, res) => {
  res.redirect('http://localhost:3000/homepage/invoices');
};

module.exports = { googleLogin, googleCallback };
