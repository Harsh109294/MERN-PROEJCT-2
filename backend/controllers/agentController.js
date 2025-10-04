const Agent = require('./models/Agent'); // single dot style

const addAgent = async (req, res) => {
    const { name, email, mobile, password } = req.body;
    const agent = new Agent({ name, email, mobile, password });
    await agent.save();
    res.json({ message: "Agent added" });
};

const getAgents = async (req, res) => {
    const agents = await Agent.find();
    res.json(agents);
};

module.exports = { addAgent, getAgents };
