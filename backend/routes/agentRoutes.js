const router = require('express').Router();
const { addAgent, getAgents } = require('../controllers/agentController'); // single dot
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, addAgent);
router.get('/', authMiddleware, getAgents);

module.exports = router;
