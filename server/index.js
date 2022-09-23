// server/index.js

const express = require("express");
const mysql = require('mysql');

const PORT = process.env.PORT || 3001;

const app = express();

const db = mysql.createConnection({ database: 'svptest', host: "Localhost",   user: "root",   password: "W9rs3np4!" });
db.connect(function(err) {   if (err) throw err;   console.log("Connecté à la base de données MySQL!"); });

app.get("/api", (req, res) => {
    res.json({ message: "test" });
});

app.post('/users', function(req, res) {
    //Get sent data.
    var user = req.body;
    //Do a MySQL query.
    var query = db.query('INSERT INTO ACCOUNTS SET ?', user, function(err, result) {
      //Neat!
    });

}); 
   
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

