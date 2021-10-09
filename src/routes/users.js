const express = require("express");
const routes = express.Router();

const UserController = require("../controllers/UsersController");

routes.post("/register", UserController.create);

module.exports = routes;
