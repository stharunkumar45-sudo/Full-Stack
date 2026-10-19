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

// Question 4
app.get('/students/:id', (req, res) => {
    const studentId = req.params.id;

    res.json({
        message: 'Student ID Received',
        id: studentId
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});