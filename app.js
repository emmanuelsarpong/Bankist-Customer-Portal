const path = require('path');
const express = require('express');
const app = express();

// Your existing project might already have defined a port
const port = process.env.PORT || 3000; // Use the environment port or a default one

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the Express server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(express.static('public')); // 'public' is the directory containing static files
