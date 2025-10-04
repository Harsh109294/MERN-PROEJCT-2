const router = require('express').Router();
const { login } = require('./controllers/authController'); // single dot

router.post('/login', login);

module.exports = router;
