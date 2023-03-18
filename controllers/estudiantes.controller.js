//Models
const { Estudiantes } = require('../models/estudiantes.model');

const getAllStudents = async(req, res) => {
    try {
        const estudiantes = await Estudiantes.findAll();
        res.status(200).json({
            status: 'success',
            message: 'lista de estudiantes ok...',
            estudiantes,
        });
    } catch (err) {
        console.log(err);
    }
};

const createStudent = (req, res) => {
    const { name } = req.body;

    const newStudent = {
        id: Math.floor(Math.random() * 100),
        name,
    };

    usuarios.push(newStudent);

    res.status(201).json({
        status: 'success',
        newStudent,
    });
};

module.exports = { getAllStudents, createStudent };