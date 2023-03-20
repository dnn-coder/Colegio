const express = require('express');
const { body, validationResult } = require('express-validator');

//controllers
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
} = require('../controllers/usuarios.controller');

const checkResult = (req, res, next) => {
    const errors = validationResult(req);

    console.log(errors);

    if (!errors.isEmpty()) {
        const errorsMsgs = errors.array().map(err => err.msg);
        const messages = errorsMsgs.join(', ');
        return res.status(400).json({ status: 'error', messages });
    }
    next();
};

const usuariosRouter = express.Router();
//definir mis endpoints

usuariosRouter.get('/', getAllUsers);

usuariosRouter.post(
    '/',
    body('codigo').notEmpty().withMessage('El campo codigo no puede estar vacio'),
    body('cedula').notEmpty().withMessage('El campo cedula no puede estar vacio'),
    body('nombres')
    .notEmpty()
    .withMessage('El campo nombres no puede estar vacio'),
    body('sexo').notEmpty().withMessage('El campo sexo no puede estar vacio'),
    body('cargo').notEmpty().withMessage('El campo cargo no puede estar vacio'),
    body('email').isEmail().withMessage('Tienes que ingresar un correo valido'),
    body('usuario')
    .notEmpty()
    .withMessage('El campo usuario no puede estar vacio'),
    body('password')
    .isLength({ min: 8 })
    .withMessage('la contrasena debe tener al menos 8 caracteres')
    .isAlphanumeric()
    .withMessage('Tu contrasena debe tener numeros y letras'),
    body('tipo').notEmpty().withMessage('El campo tipo no puede estar vacio'),
    checkResult,
    createUser
);

usuariosRouter.get('/:codigo', getUserById);

usuariosRouter.patch('/:codigo', updateUser);

usuariosRouter.delete('/:codigo', deleteUser);

module.exports = { usuariosRouter };