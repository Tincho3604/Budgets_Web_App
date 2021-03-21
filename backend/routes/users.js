const express = require("express");
const router = express.Router();
const bcryptjs = require('bcryptjs')
const db = require('../database/db');

// INSERT USER
router.post("/createUser", async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const username = req.body.username
    let passWordHash = await bcryptjs.hash(password, 8)

    db.query(
        `INSERT INTO users SET  email = ?, password = ?, username = ?`,
            [email, passWordHash, username],
            (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result);
            }
        }
    );
    })

    // AUTH USER
router.get("/auth", async (req, res) => {
    const user = req.body.email
    const pass = req.body.password
    const id = 4
    let passWordHash = await bcryptjs.hash(pass,8) 
        
    try{
        db.query(    
            `SELECT * FROM users WHERE idusers = ?`, 
                [id], 
                (error, results) => {
                    console.log('Mi results',results)
            }
        )
    }catch(err){
        console.log(err)
    }
})


    module.exports = router;

