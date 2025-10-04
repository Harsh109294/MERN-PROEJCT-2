const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const agentRoutes = require('./routes/agentRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
console.log("DB_URI from .env:", process.env.DB_URI);


mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/agents', agentRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
