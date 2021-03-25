const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const db = require('../database/db');

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

//DELETE RECORD
router.delete("/deleteRecord/:id",(req, res) => {
    const id = req.params.id; 
    db.query(
        "DELETE FROM records WHERE id = ?",
    [id],
        (err, result) => {
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send(result);
            }
        }
    );
});

//UPDATE AMOUNT
router.put("/update/:id", (req, res) => {
    const concept = req.body.value.concept
    const amount = req.body.value.amount
    const date = req.body.value.date
    const id = req.body.value.id
    db.query(
        `UPDATE records SET concept = ?, amount = ?, date= ? WHERE id = ?`,
            [concept,amount,date,id],
            (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result);
            }
        }
    );
})




module.exports = router;