const noteModel = require('../models/NotesModel.js');
const express = require('express');
const router = express.Router();
router.use(express.json());
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/', (req, res) => {
    const {noteTitle, noteDescription, priority} = req.body;

    // Validate request
    if (!noteTitle || !noteDescription || !priority) {
        return res.status(400).send({
            message: "Note title, description, and priority cannot be empty"
        });
    }

    // Create a note 
    const note = new noteModel({
        noteTitle,
        noteDescription,
        priority
    });

    note.save()
        .then(data => res.status(201).send(data))
        .catch(err => res.status(500).send({
            message: err.message || "Some error occurred while creating the note."
        }));
    });

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/', (req, res) => {
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    
    // }
    noteModel.find()
    .then(notes => {res.status(200).send(notes);})
    .catch(err => {res.status(500).send({message:err.message || "Some error occurred for retreiving data"});
});
    
    
    //TODO - Write your code here to returns all note
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/:noteId', (req, res) => {
    const {noteId} = req.params
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }
    //TODO - Write your code here to return onlt one note using noteid

    noteModel.findById(noteId)
    .then(note => {
        if(!note){
            return res.status(404).send({message: "Note not found with id" + noteId});
        }
        res.status(200).send(note);
    })
    .catch(err => {
        res.status(500).send({message: "Error retrieving note with id" + noteId});
});
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/:noteId', (req, res) => {
    const { noteId } = req.params;
    const { noteTitle, noteDescription, priority } = req.body;
    // Validate request
    if(!noteTitle || !noteDescription || !priority) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    noteModel.findByIdAndUpdate(noteId, {
        noteTitle,
        noteDescription,
        priority,
        dateUpdated: Date.now()
    }, { new: true }) // Return the updated note
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: `Note not found with id ${noteId}`
                });
            }
            res.status(200).send(note);
        })
        .catch(err => res.status(500).send({
            message: `Error updating note with id ${noteId}`
        }));
});


    //TODO - Write your code here to update the note using noteid


//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/:noteId', (req, res) => {
    const { noteId } = req.params;
    const { noteTitle, noteDescription, priority } = req.body;
    // Validate request
    if(!noteTitle || !noteDescription || !priority) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    noteModel.findByIdAndRemove(noteId)
    .then(note => {
        if(!note){
            return res.status(404).send({message: "Note not found with id" + noteId});
        }
        res.status(200).send({message: "Note deleted successfully"});
    }).catch(err => {
        res.status(500).send({message: "Error deleting note with id" + noteId});
    });
});

module.exports = router;