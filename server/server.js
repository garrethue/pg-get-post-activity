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

app.listen(PORT, () =>
  console.log(`Server is listening on http: //localhost:${PORT}`)
);
