const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000;
const pool = require("./db.js");

// set up our static server so index.html loads on
app.use(express.static("server/public"));

// set up body parser so that our req.body is always a native JS object
app.use(express.json());

//routes

//GET
app.get("/", async (req, res) => {
  try {
    const allBooks = await pool.query("SELECT * FROM books");
    res.json(allBooks.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/add-a-book", async (req, res) => {
  try {
    const { title, author, published } = req.body;
    console.log(typeof published);
    const bookAdded = await pool.query(
      "INSERT INTO books (title, author, published) VALUES ($1, $2, $3) RETURNING *",
      [title, author, published]
    );
    res.json(bookAdded);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () =>
  console.log(`Server is listening on http: //localhost:${PORT}`)
);