const mongoose = require('mongoose');

//Direccion de la base de datos,Ejemplo: 
// const URI = 'mongodb://localhost/movies';

mongoose.connect(URI, { useFindAndModify: false, useNewParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connectd'))
    .catch(err => console.log(err));

module.export = mongoose;