const express = require("express");
const router = express.Router();

const characterController = require("../controllers/characterController");
const timeController = require("../controllers/timeController");


router.get("/time", timeController.getTimes);

router.get("/players", characterController.getCharacters);

router.post("/time", timeController.createTime)

router.get("/", (req, res)=>{res.send('Welcome - Currently Running!')} );

module.exports = router;
