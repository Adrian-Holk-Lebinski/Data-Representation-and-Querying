const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser'); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//app.get with different URLs
app.get('/', (req, res) => {
    res.status(201).sendFile(__dirname + '/public/index.html')//sends us to index.html
})

app.get('/datarep', (req, res) => {
    res.send('Welcome to Data Rep')
})

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name)
    res.send('Hello ' + req.params.name)
})

app.get('/hello', (req, res) => {
    res.send("Hello")
})

//return an api with books
app.get('/api/books', (req, res) => {
    const books = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ];
    res.json({ myBooks: books })
})

app.get("/name", (req, res) => {
    res.send("Hello ")
    console.log(req.query.fname);
})

//listen for server start and then log that it started
app.listen(port, () => {
    console.log(`Visit http://localhost:${port}`)
})

//Post doesnt include the parameters within the link so its more secure
app.post("/name", (req, res) => {
    console.log(req.body)
    res.send('Hello from POST' + req.body.fname + " " + req.body.lname)
})