## Practica de laboratorio | Lista de scripts |
### Creacion de scripts por Daniel Ulises Reyes Bojorquez
### Resumen
Esta documentacion resumira cada uno de los codigos solicitados por el docente. Desde la creacion de contenedores hasta funciones que generan texto aleatorio.
### Abstract
This documentation will summarize each of the codes requested by the teacher. From creating containers to functions that generate random text.
#### Script 1: Contenedores.
El primer script se basa en la creacion de 10 contenedores con tamaño de 100 pixeles, estos tendran un color de fondo aleatorio.
```js
const body = document.querySelector('body');

const colores = ['Red', 'Blue', 'Green', 'Pink', 'Orange', 
                'Yellow', 'Gray', 'Silver', 'Purple', 'Cyan'
            ];

for(let i = 0; i < 10; i++){
    const div = document.createElement('div');
    div.style.height = '100px';

    //asignacion de color aleatorio
    div.style.backgroundColor = colores[Math.floor(Math.random()*colores.length)];
    
    body.appendChild(div);
}
```
#### Script 2: Contenedores 1.2.
El segundo script se basa en el primero, solamente se implementa que el color del fondo no se repita y que el arreglo de colores cuente con 20 de ellos diferentes.
```js
const body = document.querySelector('body');

const colores = ['Red', 'Blue', 'Green', 'Pink', 'Orange', 
                'Yellow', 'Gray', 'Silver', 'Purple', 'Cyan', 
                'DarkMagenta', 'White', 'Aqua', 'Violet','Beige', 
                'Mustard', 'Turquoise', 'Brown','Lime', 'Terracotta',
            ];

const coloresYaUsados = [];

for(let i = 0; i < 10; i++){
    const div = document.createElement('div');
    let colorDeFondo;
    div.style.height = '100px';
    //genero los colores de forma aleatoria
    do{
        colorDeFondo = colores[Math.floor(Math.random()*colores.length)];
    }while(coloresYaUsados.includes(colorDeFondo));

    coloresYaUsados.push(colorDeFondo);
    div.style.backgroundColor = colorDeFondo;
    
    body.appendChild(div);
}
```
#### Script 3: Parrafos inteligentes.
El tercer y ultimo script es la implementacion de una funcion que genere texto con palabras aleatorias de entre 50 y 100 palabras, tomando en cuenta que se debe de desplegar el numero de caracteres que tiene el texto.
```js
/*En proceso...*/
```
