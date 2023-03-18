const express = require('express');

//controllers
const {
    getAllUsers,
    createUser,
} = require('../controllers/usuarios.controller');

const usuariosRouter = express.Router();
//definir mis endpoints

usuariosRouter.get('/', getAllUsers);

usuariosRouter.post('/', createUser);

module.exports = { usuariosRouter };