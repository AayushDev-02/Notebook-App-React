const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const router = express.Router()
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get all the notes : GET "/api/notes/fetchallnotes"
router.get('/fetchallnotes', fetchUser, async (req, res) => {

    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// ROUTE 2: Add a new note using : POST "/api/notes/addnote" --  Login required
router.post('/addnote', fetchUser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description cannot be blank').isLength({ min: 5 }),

], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const { title, description, tag } = req.body;

        const note = new Note({
            title,
            description,
            tag,
            user: req.user.id

        })

        const savedNote = await note.save()

        res.json(savedNote)


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})


// ROUTE 3: Update an existing note note using : PUT "/api/notes/updatenote" --  Login required
router.put('/updatenote/:id', fetchUser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description cannot be blank').isLength({ min: 5 }),

], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, description, tag } = req.body;

        // create a new note object

        const newNote = {};

        if(title){
            newNote.title = title;
        }

        if(description){
            newNote.description = description;
        }

        if(tag){
            newNote.tag = tag;
        }


        // find the note to be updated and update it
        let note = await Note.findById(req.params.id);

        if(!note){
            return res.status(404).send("The note with the given ID was not found");
        }


        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not authorized");
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        
        res.json(note);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

// ROUTE 4: Delete an existing note note using : DELETE "/api/notes/deletenote" --  Login required
router.delete('/deletenote/:id', fetchUser, async (req, res) => {

    try {

        //find the note to be deleted and then delete it
        let note = await Note.findById(req.params.id);

        if(!note){
            return res.status(404).send("The note with the given ID was not found");
        }

        // Allow deletion only if user owns this Note
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not authorized");
        }

        note = await Note.findByIdAndDelete(req.params.id);

        res.json({ "Success": "Note deleted successfully", note: note });
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    
})
module.exports = router;