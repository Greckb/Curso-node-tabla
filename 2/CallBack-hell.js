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

const saladio = [
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
    const empleado = empleados.find((e)=> e.id === id)?.nombre
    if(empleado){
        callback (null,  empleado);
    }else{
        callback (`El Empleado con id ${id} no existe)`)
    }
}


const getSaladio = (id, callback)=>{
    const saladios = saladio.find((e)=> e.id === id)?.saladio
    if(saladios){
        callback(null, saladios);
    }else{
        callback(`El saladio con id ${id} no existe`)
    }
}
const id = 3;

getEmpleado(id, (error, empleado)=>{
    if(error){
        console.log("Error")
        return console.log(error)
    }
    getSaladio(id, (err, saladio)=>{
        if(err){
            return console.log(err)
        }
        console.log("El empleado:", empleado, "Tiene un saladio de:", saladio)
       
    })
    
});

