const express = require('express');
const app = express();

app.get('/students', (req, res) => {

    const course = req.query.course;

    res.json({
        message: 'Students Course Details',
        course: course || 'All Courses'
    });

});

app.listen(3000);