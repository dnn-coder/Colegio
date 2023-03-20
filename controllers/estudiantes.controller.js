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

const createStudent = async(req, res) => {
    const {
        idest,
        codest,
        cedest,
        expedido,
        pnomest,
        snomest,
        papeest,
        sapeest,
        sexoest,
        direcest,
        barrio,
        municipio,
        fnacest,
        observacionest,
        claveest,
        usuarios_codigo,
        acudientes_coddocumento,
    } = req.body;

    const newStudent = await Estudiantes.create({
        idest,
        codest,
        cedest,
        expedido,
        pnomest,
        snomest,
        papeest,
        sapeest,
        sexoest,
        direcest,
        barrio,
        municipio,
        fnacest,
        observacionest,
        claveest,
        usuarios_codigo,
        acudientes_coddocumento,
    });

    res.status(201).json({
        status: 'success',
        newStudent,
    });
};

module.exports = { getAllStudents, createStudent };