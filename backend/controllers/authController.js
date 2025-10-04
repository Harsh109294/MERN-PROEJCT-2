const User = require('../models/User'); // single dot works here

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({ message: "User not found" });

    if(password !== user.password) return res.status(400).json({ message: "Invalid password" });

    res.json({ message: "Login successful" });
};

module.exports = { login };
