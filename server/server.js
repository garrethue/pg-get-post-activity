const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000;
const pool = require("./db.js");
const cors = require("cors");
const { response } = require("express");

// set up our static server so index.html loads on
app.use(express.static("server/public"));

// set up body parser so that our req.body is always a native JS object
app.use(cors());
app.use(express.json());

//routes

//GET
app.get("/", async (req, res) => {
  try {
    const allBooks = await pool.query(
      "select id, title, author, to_char(published, 'DD-MON-YYYY') as published from books"
    );
    res.json(allBooks.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//POST
app.post("/add-a-book", async (req, res) => {
  try {
    const { title, author, published } = req.body;
    const bookAdded = await pool.query(
      "INSERT INTO books (title, author, published) VALUES ($1, $2, $3) RETURNING *",
      [title, author, published]
    );
    res.json(201);
  } catch (err) {
    console.error(err.message);
  }
});

//DELETE
app.delete("/delete-a-book/:id", (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    console.log("someone is deleting a book!");
    res.send("deleting book!");
  } catch (err) {
    console.error(err.message);
  }
});

//PUT

app.listen(PORT, () =>
  console.log(`Server is listening on http: //localhost:${PORT}`)
);
