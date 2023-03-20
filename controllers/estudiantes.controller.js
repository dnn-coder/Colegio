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

const getStudentById = async(req, res) => {
    const { idest } = req.params;
    const estudiante = await Estudiantes.findOne({ where: { idest } });

    if (!estudiante) {
        return res.status(404).json({
            status: 'error',
            message: 'estudiante no encontrado',
        });
    }
    res.status(200).json({
        status: 'success',
        estudiante,
    });
};

const updateStudent = async(req, res) => {
    const { idest } = req.params;
    const {
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

    const estudiante = await Estudiantes.findOne({ where: { idest } });

    if (!estudiante) {
        return res.status(404).json({
            status: 'error',
            message: 'usuario no encontrado',
        });
    }

    await estudiante.update({
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

    res.status(204).json({
        status: 'success',
    });
};

const deleteStudent = async(req, res) => {
    const { idest } = req.params;
    const estudiante = await Estudiantes.findOne({ where: { idest } });

    if (!estudiante) {
        return res.status(404).json({
            status: 'error',
            message: 'usuario no encontrado',
        });
    }

    await estudiante.update({ status: 'ELIMINADO' });

    res.status(200).json({
        status: 'success',
    });
};

module.exports = {
    getAllStudents,
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent,
};