/**
*
* 1. Crea una clase persona con las propiedades: nombre (sin apellidos), direccion, telefono, edad
* 2. Crea un array para almacenar 5 personas
* 3. Captura las personas con un prompt
* 4. Elabora una función para que ningún campo quede vacío
* 5. Elabora una función para que verifique que la edad es un número
* 6. Crea una función para mostrar el promedio de edad
* 7. Crea una función para mostrar el nombre de la persona por orden alfabético y todos los muestre en mayúsculas.
*
*/

class Persona{
    //Propiedades
    constructor(nombre, direccion, telefono, edad){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
}

//Arreglo
const personas = [];


//Capturar datos
while(personas.length < 2){
    //ingresar datos con el prompt
    let nombre;
    let direccion;
    let telefono;
    let edad;
    do{
        nombre = prompt("Ingrese su nombre(sin apellidos):");
        direccion = prompt("Ingrese su direccion: ");
        telefono = prompt("Ingrese su numero de telefono");
        edad = prompt("Ingrese su edad:");

    }
    while(verificacionEdadEsNumero == 0 || verificacionDeCampoVacio == 0);
    
    const persona = new Persona(nombre, direccion, telefono, edad);
    personas.push(persona);
}

function verificacionDeCampoVacio(){
    //si uno de los campos esta vacio
    if(nombre == "" || direccion == "" || telefono == "" || edad == ""){
        return 1;
    }
    return 0;
    
}
function verificacionEdadEsNumero(){
    if(isNaN(edad)){
        return 1;
    }
    return 0;
    
}
function promedioDeEdad(){
    const sumaDeEdades = personas.reduce((a, persona) => (parseInt(a) + parseInt(persona.edad)),0);
    const promedio = sumaDeEdades/personas.length;
    console.log(`El promedio es: ${promedio}`);
}

function nombresAlfabeticamenteMayusculas(){
    const nombresEnOrden = personas.map(persona => persona.nombre.toUpperCase()).sort();
    nombresEnOrden.map((nombresEnOrden) => {
        console.log(`El nombre es: ${nombresEnOrden}`);
    })
}



promedioDeEdad()
nombresAlfabeticamenteMayusculas()