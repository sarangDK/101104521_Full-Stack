const express = require("express")
const booksRoutes = require("./routes/books")
// mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
const mongoose = require("mongoose")

// const DB_CONNECTION_STRING = "mongodb://localhost:27017/booksdb"
const DB_CONNECTION_STRING ="mongodb+srv://da980302:qk1eo1ru12@cluster2.ifrfc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2"
mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log("Error connecting to MongoDB", err)
})


const app = express()

const SERVER_PORT = 3001

app.use(express.json())
app.use(express.urlencoded())


app.use("/api/v1", booksRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>")
    })

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})