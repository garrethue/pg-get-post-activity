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
      "select id, title, author, to_char(published, 'DD-MON-YYYY') as published, read from books"
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
app.delete("/delete-a-book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await pool.query("DELETE FROM books WHERE id=$1", [id]);
    res.send(200);
  } catch (err) {
    console.error(err.message);
  }
});

//PUT
app.put("/update-read/:id", async (req, res) => {
  try {
    console.log("someone is updating!!!");

    const { id } = req.params;
    const { read } = req.body;
    console.log(id, read);
    const updateRead = await pool.query(
      "UPDATE books SET read = $1 WHERE id = $2",
      [read, id]
    );
    res.json("read was updated");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () =>
  console.log(`Server is listening on http: //localhost:${PORT}`)
);
