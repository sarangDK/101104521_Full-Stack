const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated


const noteSchema = new mongoose.Schema({
  noteTile: {
    type: String,
  },
  noteDescription: {
    type: String,
  },
  priority: {
    type: String,
    enum: ['HIGH', 'LOW', 'MEDIUM'],
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  dateUpdated: {
    type: Date,
    default: Date.now,
  }
});



const Note = mongoose.model('Note', noteSchema);

module.exports = Note;