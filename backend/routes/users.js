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
            req.session.user = results
            res.send(results)
        }else{
            res.send({message: "Invalid username or password"})
        }
    })
})

router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        res.clearCookie('user_sid').send('cleared cookie');
     });
})

// LOGIN
router.get("/login", (req, res) => {
    if (req.session.user){
        res.send({logged: true, user: req.session.user})
    }else{
        res.send({loggedIn: false})
    }
})

module.exports = router;





