"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("./controllers/UserController"));
var routes = express_1.Router();
function getUserName() {
    return 'wsasouza2';
}
var username = getUserName();
routes.get('/', function (req, res) {
    6.;
    return res.send(username);
});
routes.get('/users', UserController_1.default.index);
routes.get('/users/create', UserController_1.default.create);
exports.default = routes;
