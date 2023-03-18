const express = require('express');

//Routers

const { usuariosRouter } = require('./routes/usuarios.routes');
const { estudiantesRouter } = require('./routes/estudiantes.routes');

//Utils

const { db } = require('./utils/databse.util');

// iniciar la funcion app

const app = express();

app.use(express.json());

app.use('/usuarios', usuariosRouter);
app.use('/estudiantes', estudiantesRouter);

db.authenticate()
    .then(() => console.log('Base de datos autenticada'))
    .catch(err => console.log(err));

db.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.log(err));

app.listen(4000, () => {
    console.log('Express app running!!!');
});