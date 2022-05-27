// Los callbacks son funciones que se van a ejecutar eventualmente cuando la misma funcion diga que es momento de ejecutarla
//setTimeout(function(){//
//   console.log ("Hola Mundo")
//},1000);


//setTimeout(()=>{
//    console.log ("Hola Mundo")
//},1000);

const getUsuarioById = (id, callback) =>{

    const user = {
        id,
        nombre: "Raul"
    }

    setTimeout(()=>{
        callback(user)
    },1500);
}

getUsuarioById(10, (usuario)=>{
    console.log(usuario.id)
    console.log(usuario.nombre.toUpperCase())
});


