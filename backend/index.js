const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const path = require('path');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// middleware
const corsOptions = {
    origin: "http://localhost:3000" // frontend URI (ReactJS)
}
app.use(express.json());
app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.json());

// POST endpoint to interact with the chatbot
app.post('/chat', (req, res) => {
    const userMessage = req.body.query;

    // Log the incoming user message for debugging purposes
    console.log(`Received message from user: ${userMessage}`);

    // Correctly specify the absolute path to the Python script
    const scriptPath = path.resolve('bot.py'); // Ensure this path is correct

    // Call the Python script
    const pythonProcess = spawn('python', [scriptPath, userMessage]);

    let chatbotResponse = '';
    let errorOutput = '';

    // Capture standard output from the Python script
    pythonProcess.stdout.on('data', (data) => {
        chatbotResponse += data.toString();
    });

    // Capture error output from the Python script
    pythonProcess.stderr.on('data', (data) => {
        errorOutput += data.toString();
    });

    // Handle the close event of the Python process
    pythonProcess.on('close', (code) => {
        if (code !== 0) {
            console.error(`Python script exited with code ${code}`);
            console.error(`stderr: ${errorOutput}`);
            return res.status(500).json({ error: 'Error in Python chatbot', details: errorOutput });
        }
        console.log(`Python script output: ${chatbotResponse}`);

        // Parse JSON response and send it
        try {
            const parsedResponse = JSON.parse(chatbotResponse);
            res.json(parsedResponse);
        } catch (error) {
            console.error('Failed to parse JSON from Python script:', error);
            res.status(500).json({ error: 'Failed to parse response from Python script' });
        }
    });
});

mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});
