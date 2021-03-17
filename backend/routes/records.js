const express = require("express");
const mysql = require("mysql");
const router = express.Router();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'budget_db'
});


// Routes

//CREATE REGISTER
router.post("/createRegister", (req, res) => {
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
            res.send("Records saved");
            }
        }
    );
});

//GET REGISTERS
router.get("/getAllRegisters", (req, res) => {
    db.query(
        "SELECT * FROM records",
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result);
            }
        }
    );
});


//SELECT FIRST 10 RECORDS
router.get("/getFirstTenRecords", (req, res) => {
    db.query(
        "SELECT * FROM records LIMIT 10",
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result);
            }
        }
    );
});


//SUM AMOUNT EGRESS
router.get("/getTotalEgress", (req, res) => {
    db.query(
        "SELECT sum(amount) from records WHERE type = 'Egress'",
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result);
            }
        }
    );
});

//SUM AMOUNT INGRESS
router.get("/getTotalIngress", (req, res) => {
    db.query(
        "SELECT sum(amount) from records WHERE type = 'Ingress'",
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result);
            }
        }
    );
});

module.exports = router;