
const body = document.querySelector('body');

//'AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine','Beige', 
//'Bisque', 'Chocolate', 'Crimson','DarkOrange', 'DarkSalmon',

const colores = ['red', 'blue', 'green', 'pink', 'orange', 'yellow', 'gray', 'silver', 'purple', 'cyan'];


for(let iteracion = 0; iteracion < 10; iteracion++){
    //creo el contenedor
    const div = document.createElement('div');
    //le asigno un tamanio de 100 pixeles
    div.style.height = '100px';
    //le doy un color random de mi arreglo de 10 colores
    div.style.backgroundColor = colores(Math.floor(Math.random()*colores.length));
    
    body.appendChild(div);
}