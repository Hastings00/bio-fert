// server.js

const express = require('express');

const path = require('path');

const app = express();

const port = 3000;

// Serve static files (styles, scripts, images)

app.use(express.static(path.join(__dirname, 'public')));

// Define API endpoint for forums

app.get('/api/forums', (req, res) => {

    // Replace this mock data with your actual forum data

    const forumsData = [

        { category: 'General', title: 'General Discussion' },

        { category: 'Technology', title: 'Tech Innovations' },

        // Add more forum data as needed

    ];

    res.json(forumsData);

});

// Define a catch-all route to serve the HTML file

app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});

// Start the server

app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`);

});

