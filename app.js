const express = require('express');

//Routers

const { usuariosRouter } = require('./routes/usuarios.routes');

//Utils

const { db } = require('./utils/databse.util');

// iniciar la funcion app

const app = express();

app.use(express.json());

app.use('/usuarios', usuariosRouter);

app.get('/estudiantes', (req, res) => {
    res.status(200).json({
        estudiantes,
    });
});
app.post('/estudiantes', (req, res) => {
    const { name } = req.body;

    const newEstudent = {
        id: Math.floor(Math.random() * 100),
        name,
    };

    estudiantes.push(newEstudent);

    res.status(201).json({
        status: 'success',
        message: 'Lista de estudiantes',
        newEstudent,
    });
});

db.authenticate()
    .then(() => console.log('Base de datos autenticada'))
    .catch(err => console.log(err));

db.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.log(err));

app.listen(4000, () => {
    console.log('Express app running!!!');
});