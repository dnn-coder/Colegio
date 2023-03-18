//Models
const { Usuarios } = require('../models/usuario.model');

const getAllUsers = async(req, res) => {
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
};

const createUser = async(req, res) => {
    try {
        const {
            codigo,
            cedula,
            nombres,
            sexo,
            cargo,
            email,
            usuario,
            password,
            tipo,
        } = req.body;
        const newUser = await Usuarios.create({
            codigo,
            cedula,
            nombres,
            sexo,
            cargo,
            email,
            usuario,
            password,
            tipo,
        });

        res.status(201).json({
            status: 'success',
            newUser,
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = { getAllUsers, createUser };