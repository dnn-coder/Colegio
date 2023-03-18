const express = require('express');

//controllers
const {
    getAllStudents,
    createStudent,
} = require('../controllers/estudiantes.controller');

const estudiantesRouter = express.Router();
//definir mis endpoints

estudiantesRouter.get('/', getAllStudents);

estudiantesRouter.post('/', createStudent);

module.exports = { estudiantesRouter };