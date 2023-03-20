const express = require('express');

//Middlewares
const {
    createUserValidators,
} = require('../middlewares/validators.middleware');

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

usuariosRouter.post('/', createUserValidators, createUser);

usuariosRouter.get('/:codigo', getUserById);

usuariosRouter.patch('/:codigo', updateUser);

usuariosRouter.delete('/:codigo', deleteUser);

module.exports = { usuariosRouter };