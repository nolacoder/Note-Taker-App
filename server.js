const fs = require('fs');
const express = require('express');
const path = require('path');
const {readFromFile, readAndAppend } = require('./helpers/fsUtils')
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId()
const { V4MAPPED } = require('dns');

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
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

app.post('/api/notes', (req, res) => {
    const { title, text } = req.body;

    const newNote = {
        title,
        text,
        id: uid(),
    }

    readAndAppend(newNote, './db/db.json')

    const response = {
        status: 'success',
        body: newNote,
      };
  
    res.json(response);
})

app.delete('/api/notes/:id', (req, res) => {

})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
