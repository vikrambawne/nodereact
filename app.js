// app.js
const express = require('express'); // Import express
const app = express();              // Create an express app

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');       // Send a simple response
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});