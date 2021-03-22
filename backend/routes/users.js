const express = require("express");
const router = express.Router();
const bcryptjs = require('bcryptjs')
const db = require('../database/db');
const { response } = require("express");

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
router.post("/auth",  async (req, res) => {
    const email = req.body.email
    const pass = req.body.password
    const username = req.body.username
    let passwordHash = await bcryptjs.hash(pass, 8)
    db.query("SELECT * FROM users WHERE email = ?", [email], async (error,results) => {
        if(!results ||  await bcryptjs.compare(pass, results[0].password)){
            console.log('RESULTS',results)
        }else{
            console.log('ERROR',error)
        }
    })
        
    
})

module.exports = router;





