const express = require("express");
const app = express();
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.json({ limit: "10mb" }));

let db = new sqlite3.Database("credential.db", (err) => {
    if (err) {
        console.error(err.message)
    } console.log('Connected to access the Database. ');
});
app.post("/validatePassword", (req, res) => {
  const { email, password } = req.body;
  
  db.get('SELECT * FROM credentials WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send({ validation: false, error: "Internal Server Error" });
      return;
    }

    if (row) {
      res.send({ validation: true });
    } else {
      res.send({ validation: false });
    }
  });
});

app.listen(3001, () =>
  console.log("Server Listening at PORT http://localhost:3001/")
);
