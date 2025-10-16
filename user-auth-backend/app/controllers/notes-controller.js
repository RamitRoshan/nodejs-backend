/*
list, create , update , delete.
*/
const Note = require('../models/note-model');

const notesCltr = {};


// List all notes
notesCltr.list = async (req, res) => {
    try {
        const notes = await Note.find({user: req.userId}); // latest first
        res.json(notes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

notesCltr.show = async(req, res) => {
    const empId = req.params.empId;
    try{
        const notes = await Note.findById(empId);
        if(!notes){
            return res.status(404).json({});
        }
        res.json(notes);

    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

//Create a note
notesCltr.create = async (req, res) => {
    const body = req.body;
    try {
        const note = new Note(body);
        note.user = req.userId;
        await note.save();
        res.status(201).json(note);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
};

//Update a note by ID
notesCltr.update = async (req, res) => {
    const empId = req.params.empId;
    const body = req.body;
    try {
        const note = await Note.findByIdAndUpdate(empId, body, {new:true});
        if (!note) {
            return res.status(404).json({});
        }
        res.json(note);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};


//Delete a note by ID
notesCltr.remove = async (req, res) => {
    const empId = req.params.empId;
    const body = req.body;
    try {
        const note = await Note.findByIdAndDelete(empId);
        if (!note) {
            return res.status(404).json({});
        }

        res.json(note);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

module.exports = notesCltr;
