const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
    res.send('This is About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Us');
});

app.get('/students', (req, res) => {
    res.json({
        message: 'Student Details'
    });
});

app.listen(3000, () => {
    console.log('Server started');
});