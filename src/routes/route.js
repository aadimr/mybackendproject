const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookmodel= require("../models/bookmodel")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", UserController.createBook)

router.get("/getBook", UserController.getBook)

// router.post("/createUser", UserController.createUser)

// router.get("/getUsersData", UserController.getUsersData)

module.exports = router;