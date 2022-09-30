const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId()

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

notes.post('/', (req, res) => {
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

notes.delete('/:id', (req, res) => {

})

module.exports = notes
