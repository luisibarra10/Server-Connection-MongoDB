const express = require('express');


const app = express();
const { mongoose } = require('./database');

app.set('port', process.env.PORT || 3000);

//Respuesta en formato json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Requerir rutas
// app.use('', require(''));

app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'));
})