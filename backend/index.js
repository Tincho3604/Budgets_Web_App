const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');


//importing routes
const recordsRoutes = require('./routes/records')

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'budget_db'
});

app.post("/create", (req, res) => {
    const concept= req.body.concept;
    const amount = req.body.amount;
    const date = req.body.date;
    const type = req.body.type;
    
    db.query(
        "INSERT INTO records (concept, amount , date, type) VALUES (?,?,?,?)",
    [concept, amount , date, type],
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Values inserted");
            }
        }
    );
});

app.listen(4000, () => {
    console.log("Server running on port 4000")
})