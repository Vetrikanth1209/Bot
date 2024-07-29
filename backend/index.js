const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// Middleware
const corsOptions = {
    origin: "https://bot-frontend-n4x1.onrender.com" // frontend URI (ReactJS)
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
    const userMessage = req.body.query;

    try {
        // Make sure the URL matches where Flask is running
        const response = await axios.post('https://flask-app-pf9d.onrender.com/chat', { query: userMessage });
        res.json(response.data);
    } catch (error) {
        console.error('Error calling Flask API:', error);
        res.status(500).json({ error: 'Error calling Flask API', details: error.message });
    }
});

mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    });
}).catch(err => {
    console.log(err);
});
