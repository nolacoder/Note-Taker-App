// This file holds all of the routes for /api/notes. If additional api routes related to notes are needed, they can be easily added to this file.
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// The following two lines requires and initializes the npm package that creates unique id's
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

    // This helper file has a function that allows use to enter in the note object and data file. It handles all the work for us! Keeps this page lean.
    readAndAppend(newNote, './db/db.json')

    const response = {
        status: 'success',
        body: newNote,
    };

    res.json(response);
})

module.exports = notes
