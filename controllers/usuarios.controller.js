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
            status,
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
            status,
        });

        res.status(201).json({
            status: 'success',
            newUser,
        });
    } catch (err) {
        console.log(err);
    }
};
const getUserById = async(req, res) => {
    const { codigo } = req.params;
    const usuario = await Usuarios.findOne({ where: { codigo } });

    if (!usuario) {
        return res.status(404).json({
            status: 'error',
            message: 'usuario no encontrado',
        });
    }
    res.status(200).json({
        status: 'success',
        usuario,
    });
};

const updateUser = async(req, res) => {
    const { codigo } = req.params;
    const { nombres, sexo, cargo, email, password, tipo, status } = req.body;
    const usuario = await Usuarios.findOne({ where: { codigo } });

    if (!usuario) {
        return res.status(404).json({
            status: 'error',
            message: 'usuario no encontrado',
        });
    }

    await usuario.update({
        nombres,
        sexo,
        cargo,
        email,
        password,
        tipo,
        status,
    });

    res.status(204).json({
        status: 'success',
    });
};
const deleteUser = async(req, res) => {
    const { codigo } = req.params;
    const usuario = await Usuarios.findOne({ where: { codigo } });

    if (!usuario) {
        return res.status(404).json({
            status: 'error',
            message: 'usuario no encontrado',
        });
    }

    await usuario.update({ status: 'ELIMINADO' });

    res.status(200).json({
        status: 'success',
    });
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
};