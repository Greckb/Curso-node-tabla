const empleados = [
    {
        id: 1,
        nombre: "Raul",
    },
    {
        id: 2,
        nombre: "Pedro",
    },
    {
        id: 3,
        nombre: "Alex",
    }
]

const saladios = [
    {
        id: 1,
        saladio: 1000,
    },
    {
        id: 2,
        saladio: 2000,
    },
]

const getEmpleado = (id, callback)=>{
    
    return new Promise((resolve, reject)=>{
        const empleado = empleados.find((e)=> e.id === id)?.nombre;
        (empleado)
        ?resolve(empleado)
        :reject(`No existe el empleado con id: ${id}`)
        
    });
    
}

const getSaladio = (id, callback)=>{
    return new Promise((req,res)=>{
        const sala = saladios.find((f)=> f.id === id)?.saladio;
        (sala)
        ?req(sala)
        :res(`No existe el saladio del id: ${id}`);
    })
}
const id= 3;

//getEmpleado(id)
//    .then(empleado =>console.log(empleado))
//    .catch(error => console.log(error))
//
//getSaladio(id)
//    .then(saladio =>console.log(saladio))
//    .catch(error => console.log(error))
    
//Promesas en cadena

let nombre 
getEmpleado(id)
    .then(empleado =>{
        nombre = empleado;
        return getSaladio(id)
    })
    .then(saladio => console.log("El empleado", nombre, "tiene un saladio de:", saladio))
    .catch(err => console.log(err))
