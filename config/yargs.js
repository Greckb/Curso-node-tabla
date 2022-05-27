
const  argv  =  require ( 'yargs' )
.option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla'
})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    demandOption: true,
    describe: 'Listar las tablas de multiplicar'
})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default: 10,
    demandOption: true,
    describe: 'Hasta que numero 20'
})
.check((argv,options)=>{
    if(isNaN(argv.b)){
        throw "La base tiene que ser un numero"
    }
    if(argv.h<1 || argv.h>20){
        throw "El numero hasta tiene que ser entre 1 y 20"
    }
    return true;
})
.argv

module.exports = argv;