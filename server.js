const fs = require('fs');
const express = require('express');
const path = require('path');
const {readFromFile, writeToFile, readAndAppend } = require('./helpers/fsUtils')

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, "public/notes.html"))
)

// handle GET *

app.get('/api/notes', (req, res) => {
    res.send()
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
