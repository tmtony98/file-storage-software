const express = require("express");
const verifyToken = require ("../Middlewares/jwtMiddleware")
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

var AWS = require("aws-sdk");


//create router for express app using router () object
//here router is a variaable i think
const router = new express.Router();

const userController = require("../Controllers/userController");

//user registration
router.post("/user/register", userController.register);

router.post("/user/login", userController.login  )

router.post("/upload" ,  verifyToken , upload.single("myFile") , userController.fileUpload)

router.get("/api/files" , verifyToken, userController.listFile)

router.post("/createfolder", verifyToken,  userController.createFolder)

router.get("/user/folders" ,  userController.getFolders)
module.exports = router