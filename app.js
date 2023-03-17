const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

//conectarme a mi base de datos
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123456',
    port: 5432,
    database: 'recuerdodb',
});

db.authenticate()
    .then(() => console.log('Base de datos autenticada'))
    .catch(err => console.log(err));

db.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.log(err));

//Crear nuestro primer modelo (tabla)
const Usuarios = db.define('usuarios', {
    codigo: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    cedula: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'ACTIVO',
    },
});

// iniciar la funcion app

const app = express();

app.use(express.json());

//definir mis endpoints

app.get('/usuarios', async(req, res) => {
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

app.listen(4000, () => {
    console.log('Express app running!!!');
});