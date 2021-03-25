const express = require("express");
const router = express.Router();
const bcryptjs = require('bcryptjs')
const db = require('../database/db');
const { response } = require("express");
const jwt = require('jsonwebtoken');
const { token } = require("morgan");

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
const verifyJWT = (req, res, next) => {
    const token = req.headers["authorization"];
    if(!token){
        res.send("You need tokeen")
    }else{
        jwt.verify(token, 'secret', (err, decoded) => {
            if(err){
            res.json({auth: false, message:"Failed to authenticate"})
            }else{
                req.userId = decoded.id;
                next();
            }
        });
    }
};

// AUTH USER
router.post("/auth", async (req, res) => {
    const email = req.body.email
    const username = req.body.username
    const pass = req.body.password

    db.query("SELECT * FROM users WHERE email = ?", [email], async (error,results) => {
        if(results.length > 0 && (await bcryptjs.compare(pass, results[0].password))){
            const token = await jwt.sign({results:results}, 'secret', (err,token) => {
                req.session.user = results
                res.send({results,token,message: "Your login was succesfully done!"})
            })
        }else{
            res.send({message: "Password or email not found"})
            }
        })
    })



router.get("/infoUser", verifyJWT, (req, res) => {
    res.send("You are Autenticathed")
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