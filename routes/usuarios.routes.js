const express = require('express');

//controllers
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
} = require('../controllers/usuarios.controller');

const usuariosRouter = express.Router();
//definir mis endpoints

usuariosRouter.get('/', getAllUsers);

usuariosRouter.post('/', createUser);

usuariosRouter.get('/:codigo', getUserById);

usuariosRouter.patch('/:codigo', updateUser);

usuariosRouter.delete('/:codigo', deleteUser);

module.exports = { usuariosRouter };