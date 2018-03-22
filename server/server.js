// Simple Express setup (Node server).
const path = require('path');
const express = require('express');
const app = express();
const root = path.join(__dirname, '..', 'public');

// Heroku port variable support...
const port = process.env.PORT || 3000;

app.use(express.static(root));

app.get('*', (req, res) => {
    res.sendFile(path.join(root, 'index.html'));
});

app.listen(3000, () => {
    console.log('server running...');
});