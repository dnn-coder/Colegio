const express = require('express');

const usuarios = [
    { id: 1, name: 'DANNY' },
    { id: 2, name: 'CARLOS' },
    { id: 3, name: 'PEDRO' },
    { id: 4, name: 'PABLO' },
];
const estudiantes = [
    { id: 1, name: 'ANDREA' },
    { id: 2, name: 'PEDRO' },
    { id: 3, name: 'DANIELA' },
    { id: 4, name: 'FABIAN' },
];

// iniciar la funcion app

const app = express();

app.use(express.json());

//definir mis endpoints

app.get('/usuarios', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'lista de usuarios ok...',
        usuarios,
    });
});

app.post('/usuarios', (req, res) => {
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

app.get('/estudiantes', (req, res) => {
    res.status(200).json({
        estudiantes,
    });
});

app.listen(4000, () => {
    console.log('Express app running!!!');
});