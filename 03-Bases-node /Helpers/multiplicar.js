const fs = require ('fs');
const { argv } = require('process');
const colors = require('colors');

const crearArchivo= async(base=5, listar=false, hasta=10)=>{
    try {
        console.clear();
        let salida= '';
        
            for (let index = 0; index <= hasta; index++) { 
              salida+=`${base} * ${index} = ${base * index}\n`; 
            }
            if(listar){
            console.log("=======================".green)
            console.log(`       Tabla del`.green, colors.green(base));
            console.log("=======================".green)
            console.log(salida)
            }
    
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
            return `tabla del ${base} grabada con exito`;
        
       

    } catch (err) {
        throw err
    }    
}

module.exports= {crearArchivo};
