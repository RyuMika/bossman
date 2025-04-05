const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// Serve static files (HTML, CSS, JS, Images)
app.use(express.static(path.join(__dirname, '../public')));

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html.intex.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
