
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

//3 - El Id lo recibe este del argumento que llamamos abajo
const getInfoUsuario = async(id)=>{

    try {
        const empleado = await getEmpleado(id);
        const saladio = await getSaladio(id);
        return `El empleado id es: ${empleado} y tiene un sueldo de: ${saladio}`;
        
    } catch (error) {
        throw error;
    }
}

//Creamos un ID
const id= 30;

//Ese Id se lo paso como argunmento a GetInfoUsuario
getInfoUsuario(id)
    .then(msg => {
        console.log("Todo Bien")
        console.log(msg)})
    .catch(err => {
        console.log("Todo Mal")
        console.log(err)})
    
        
 

