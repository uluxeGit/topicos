/* 
* 1. Crea una clase libro
* 2. La clase libro tendra titulo, autor, anio y genero
* 3. Crea un metodo que devuelva toda la informacion del libro
* 4. Pide 3 libros y guardalos en un array
* 5. Los libros se introduciran al arrancar el programa pidiendo los datos con un prompt
* 6. Validar que los campos no se introduzcan vacios
* 7. Validar que el anio sea un numero y tenga 4 digitos 
* 8. Validar que el genero sea: aventura, terror o fantasia 
* 9. Crea una funcion que muestre todos los libros
* 10. Crea una funcion que muestre los autores ordenados alfabeticamente
* 11. Crea una funcion que pida un genero y muestre la informacion de 
      los libros que pertenezcan a ese genero usando un metodo que devuelva la informacion
*/

//Creo la clase llamada 'Libro'
class Libro{
    //Se asignan los atributos de el libro
    constructor(titulo, autor, year, genero){
        this.titulo = titulo
        this.autor = autor
        this.year = year
        this.genero = genero         //backstick se usa para hacer temple string
    }
    //Se crea el metodo 'informacionTotalDelLibro' para mostrar la informacion total de un libro
    informacionTotalDelLibro(){
        return `El libro se llama  ${titulo}, escrito por ${autor} en el anio ${year} y es de ${genero}`
    }
}
//Se define el array 'libros'
const libros = []

//Declaracion de ciclo while para obtener la informacion de los libros
while(libros.length < 1){
    //Definicion caracteristicas del libro
    let titulo;
    let autor;
    let year;
    let genero;

    //Pedir el ingreso de los datos con la funcion 'prompt'
    do{titulo = prompt("Nombre del libro:")}while(titulo == '');    //Se verifica que se haya ingresado el titulo del libro
    do{autor = prompt("Autor del libro:")}while(autor == '');   ////Se verifica que se haya ingresado el nombre del autor
    do{year = prompt("A~no del libro:")}while(!(!isNaN(year) && year.length == 4 ));    //Se verifica que el anio sea numero y de 4 digitos
    //Se verifica que el genero sea igual a (aventura)(terror)(fantasia)
    do{genero = prompt("Genero del libro:")}while(!(genero == "Aventura" || genero == "Terror" || genero == "Fantasia"));

    //Se asigna a un objeto los valores ingresados con el metodo 'push'
    const libro = new Libro(titulo, autor, year, genero);
    libros.push(libro);
    
}

const mostrarTodosLosLibros = () => {
    const libroMostrado = libros.map((libro) => {
        console.log(`El libro ${libro.titulo} escrito por ${libro.autor} en el anio ${libro.year} es del genero ${libro.genero}`);
    }) 
}
function mostrarAutoresAlfabeticamente(){
    const autoresEnOrden = libros.map(libro => libro.autor).sort();
    autoresEnOrden.map((autoresEnOrden) => {
        console.log(`Los autores son: ${autoresEnOrden}`);
    })
}

const mostrarPorGenero = () => {
    const generoPedido = prompt('Que genero quieres:');//Pregunta que genero quieren que se les muestre
    const coleccionDeLibros = libros.filter((libro) => libro.genero === generoPedido)//Se filtran por genero
    if (coleccionDeLibros > 0){
        console.log(`No hay libros en existencia del genero ${generoPedido}`);
    }else{
        console.log('Los libros del genero son: ');
        coleccionDeLibros.map((libro) => {
            console.log(`El libro ${libro.titulo} escrito por ${libro.autor} en el anio ${libro.year} es del genero ${libro.genero}`)
        });
    }


}

mostrarTodosLosLibros();
mostrarAutoresAlfabeticamente();
mostrarPorGenero();
