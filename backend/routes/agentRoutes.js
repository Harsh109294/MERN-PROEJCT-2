const router = require('express').Router();
const { addAgent, getAgents } = require('./controllers/agentController'); // single dot
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, addAgent);
router.get('/', authMiddleware, getAgents);

module.exports = router;
