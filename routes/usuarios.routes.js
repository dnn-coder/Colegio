const express = require('express');
//Models
const { Usuarios } = require('../models/usuario.model');

const usuariosRouter = express.Router();
//definir mis endpoints

usuariosRouter.get('/', async(req, res) => {
    try {
        const usuarios = await Usuarios.findAll();
        res.status(200).json({
            status: 'success',
            message: 'lista de usuarios ok...',
            usuarios,
        });
    } catch (err) {
        console.log(err);
    }
});

usuariosRouter.post('/', (req, res) => {
    const { name } = req.body;

    const newUser = {
        id: Math.floor(Math.random() * 100),
        name,
    };

    usuarios.push(newUser);

    res.status(201).json({
        status: 'success',
        usuarios,
    });
});

module.exports = { usuariosRouter };