
const completo = {
    nombre: "Raul",
    apellido: "Lopez",
    edad: "43",
    /* Esto es una manera, pero tambien igual que abajo
    getNombre: function(){
        return `${this.nombre} ${this.apellido} ${this.edad}`
    }
    */
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.edad}`
    }
}

//console.log(completo.getNombre()) //Raul Lopez 43

//const nombre = completo.nombre;
//const apellido = completo.apellido;
// const edad = completo.edad;

//const {nombre, apellido, edad, ano = 1978} = completo;

function imprimeNombre ({nombre, apellido, edad, ano = 1978}){
   
    console.log(nombre, apellido, edad, ano)
}

//imprimeNombre(completo)

const hereos = ['superman', 'batman', 'Robbin'];

//const h1 = hereos[0]
//const h2 = hereos[0]
//const h3 = hereos[0]

const [ ,  , h3] = hereos



console.log(h3)