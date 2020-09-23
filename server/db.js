const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "bookstoredb",
});

pool.on("connect", (client) => {
  console.log("PostgreSQL is connected");
});
pool.on("connect", (client) => {
  console.log("PostgreSQL is connected");
});
// the pool can emit an error that we can capture which can be super
// helpful for debugging connection issues or network isses.
pool.on("error", (err, client) => {
  console.log("Unexpected error on client", err);
});

module.exports = pool;
