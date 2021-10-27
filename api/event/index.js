const express = require('express') 
const eventController = require("./controller.js")
const router = express.Router();

router.get('/all',eventController.getAllEvents);

module.exports = router;