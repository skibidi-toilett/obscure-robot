const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;
const REPL_URL = `https://replit.com/@SmartSpamAI/mppserver`; // Auto-detect Replit URL

// Simple route to keep the server alive
app.get('/', (req, res) => {
    res.send('Server is running...');
});

// Start Express server
app.listen(PORT, () => {
    console.log(`Server running at ${REPL_URL}`);

    // Self-ping every 10 seconds
    setInterval(async () => {
        try {
            const response = await fetch(REPL_URL);
            if (response.ok) {
                console.log(`Ping successful: ${new Date().toLocaleTimeString()}`);
            } else {
                console.log(`Ping failed: ${response.status}`);
            }
        } catch (error) {
            console.log(`Error pinging: ${error.message}`);
        }
    }, 10000);
});