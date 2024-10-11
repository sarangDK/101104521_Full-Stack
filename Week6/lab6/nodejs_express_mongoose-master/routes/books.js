const express = require("express")
const BookModel =  require('../models/book');


const routes = express.Router()

//Get All Books
routes.get("/books", (req, res) => {
    BookModel.find()
        .then((books) => res.send(books))
        .catch((err) => res.status(500).send({ message: err.message }));
});
//Add NEW Book
routes.post("/books", async (req, res) => {
    const BookData = req.body
    try {
        // Create a new Book
    const newBook = new BookModel(BookData)
    // save the book to mongoDB
    const savedBook = await newBook.save()
    res.send(savedBook)
    // catch any errors and send them to the client
} catch (err) {
    res.status(500).send({message: err.message})
}
})

//Update existing Book By Id
routes.put("/book/:bookid", (req, res) => {
    //Update book by ID 
    BookModel.findByIdAndUpdate(req.params.bookid, req.body, {new: true}).then((book) => {
        if(book){
            res.send(book)
        } else {
            res.status(404).send({message: "Book not found"})
        }
        
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })

    //res.send({message: "Update existing Book By Id"})
})

//Delete Book By ID
routes.delete("/book/:bookid", (req, res) => {
    BookModel.findyByIdAndDelete(req.params.bookid).then((book) => {
        if(book) {
            res.send({message: "Book Deleted"})
        }
        else {
            res.status(404).send({message: "Book not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
})

// get book by ID
routes.get("/book/:bookid", (req, res) => {
    BookModel.findById(req.params.bookid)
        .then((book) => {
            if (book) {
                res.send(book);
            } else {
                res.status(404).send({ message: "Book not found" });
            }
        })
        .catch((err) => res.status(500).send({ message: err.message }));
});

// Get All Books in sorted order
routes.get("/books/sort", (req, res) => {
    BookModel.find().sort({ title: 1 }) // Example sorting by title in ascending order
        .then((books) => res.send(books))
        .catch((err) => res.status(500).send({ message: err.message }));
});

module.exports = routes;