
const yargs = require('yargs');
const { crearArchivo } = require('./03-Bases-node /Helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');


//const base = 4;

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => 
        console.log(nombreArchivo.green, "Creado"))
    .catch((err) => 
        console.log(err)
    );





  







 
