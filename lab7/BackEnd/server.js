const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser');

//mongoose
const mongoose = require('mongoose');
main().catch(err => console.log(err));

var cors = require('cors')
app.use(cors())

//mongoose database
async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.krhlf2n.mongodb.net/?retryWrites=true&w=majority');
}

//create schema for books
const bookSchema = new mongoose.Schema({
    title: String,
    cover: String,
    author: String
});

const bookModel = mongoose.model('mybooks', bookSchema);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//post methods
app.post('/api/books', (req, res) => {
    console.log(req.body);

    bookModel.create({
        title: req.body.title,
        cover: req.body.cover,
        author: req.body.author
    })
    res.send("Data Recieved")
})

//app getters
app.get("/api/books", (req, res) => {
    bookModel.find((error, data) => {
        res.json(data);
    })
})

//get id 
app.get("/api/books/:id", (req, res) => {
    console.log(req.params.id)
    bookModel.findById(req.params.id, (error, data) =>  {
        res.json(data);
    });
})
//listening to port
app.listen(port, () => {
    console.log(`Example App listening on port ${port}`)
})