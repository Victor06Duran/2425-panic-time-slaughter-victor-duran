const express = require("express");
const routes = express.Router();

const characterController = require("../controllers/characterController");
const timeController = require("../controllers/timeController");


routes.post('/time', timeController.createDay);

routes.get('/players', characterController.getAllCharacters);

routes.get('/time', timeController.getAllDays);

module.exports = routes;
