const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const tasks = []; // Array to store tasks

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req, res) {
    fs.readdir('./files', function (err, files) {
        if (err) {
            return res.status(500).send('Unable to scan directory: ' + err);
        }
        res.render("index", { files: tasks });
    });
});

app.post('/create', function (req, res) {
    const { title, details } = req.body;
    if (title && details) {
        const fileName = title.split(' ').join('') + '.txt';
        const filePath = path.join(__dirname, 'files', fileName);
        
        fs.writeFile(filePath, details, (err) => {
            if (err) {
                return res.status(500).send('Error writing file: ' + err);
            }
            tasks.push({ title: title, url: '#' });
            res.redirect('/');
        });
    } else {
        res.redirect('/');
    }
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});


