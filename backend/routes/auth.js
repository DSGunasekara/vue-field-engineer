const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const router = require("express").Router()
const config = require("config")

const User = require("../models/User")

router.post("/", async (req, res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(404).send("No user found");

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).send("Invalid credentials");

        const payload = {
            user: {
                id: user.id,
                role: user.role,
            },
        };

        return jwt.sign(
            payload,
            config.get("jwtSecret"),
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.status(200).send(token);
            }
        );

    }catch (error){
        return res.status(500).send(error)
    }
})

module.exports = router;