const express = require('express');
const app = express();

// Your existing project might already have defined a port
const port = process.env.PORT || 3000; // Use the environment port or a default one

// Example of a basic route
app.get('/', (req, res) => {
  res.send('Hello World with Express!');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(express.static('public')); // 'public' is the directory containing static files
