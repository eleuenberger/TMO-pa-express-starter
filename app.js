const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let id = 0;
var lib = {
  "books": [
    {
      "id": 2,
      "author": "Philip K. Dick",
      "title": "Do Androids Dream of Electric Sheep?",
      "yearPublished": 1968
    },
    {
      "id": 3,
      "author": "William Gibson",
      "title": "Neuromancer",
      "yearPublished": 1984
    }
  ]
};


app.get("/health", (req, res) => {
  res.status(200).send("Don't panic.");
});


app.post("/api/books", (req, res) => {
  // manually add ID, with DB implementation this would be handled by DB
  id = id + 1;
  let book = {
    "id": id,
    "author": req.body.author,
    "title": req.body.title,
    "yearPublished": req.body.yearPublished
  }
  lib.books.push(book);
  res.status(201).send(book);
});

app.get("/api/books", (req, res) => {
  //console.log(lib);
  lib.books.sort((a, b) => {
    return a.title.localeCompare(b.title);

  });
  //console.log(lib.books);
  res.status(200).send(lib);
});


app.delete("/api/books", (req, res) => {
  // Remove all items from database
  lib.books = [];
  res.status(204).send()
});


module.exports = app;
