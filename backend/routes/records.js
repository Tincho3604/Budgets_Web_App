const express = require("express");
const router = express.Router();
const db = require('../database/db');

// ROUTES RECORDS

//CREATE REGISTER
router.post("/createRegister", (req, res) => {
    const concept= req.body.concept;
    const amount = req.body.amount;
    const date = req.body.date;
    const type = req.body.types;
    const idUsers = req.body.idUsers
    db.query(
        "INSERT INTO records (concept, amount , date, types, fk_author) VALUES (?,?,?,?,?)",
    [concept, amount , date, type, idUsers],
    (err) => {
        if(err){
            console.log(err)
        }else{
            res.send("Records saved");
            }
        }
    );
});



//GET REGISTERS BY ID
router.get("/getAllUsersRegisters", (req, res) => {
    db.query(
        "SELECT email, username, amount, fk_author, types FROM users INNER JOIN records ON records.fk_author = users.idusers",
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result);
            }
        }
    );
});



//GET REGISTERS BY ID
router.get("/getAllRegisters/:id", (req, res) => {
    const id = req.params.id
    db.query(
        "SELECT * FROM records WHERE fk_author = ?",[id],
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
router.get("/getFirstTenRecords/:id", (req, res) => {
    const id = req.params.id
    db.query(
        "SELECT * FROM records WHERE fk_author = ? LIMIT 10",[id],
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