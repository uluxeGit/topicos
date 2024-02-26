## Practica de laboratorio | Lista de scripts |
#### Script : Contenedores
En este script se solicito la creacion de 10 contenedores de 100 pixeles cada uno.
Primeramente, comecte mi archivo js a mi index.html de la siguiente manera:
```html
<script src="contenedores.js"defer></script>
```
Posterior a eso, en el documento js cree mi "body" y un arreglo que contiene 10 colores.
```js
const body = document.querySelector('body');

const colores = ['Red', 'Blue', 'Green', 'Pink', 'Orange', 
                'Yellow', 'Gray', 'Silver', 'Purple', 'Cyan'
];
```
Despues hice un ciclo for para crear los contenedores declarando i como let e iterando 10 veces empezando en 0, esto quiere decir del 0 al 9.
```js
for(let i = 0; i < 10; i++){...
```
Dentro del bucle for se encuentran las lineas de codigo que en conjunto crean los contenedores de 100 pixeles con un color random tomado del arreglo "colores" usando la funcion "Math.random()". Posteriormente de la creacion de un contenedor, este se agrega al body con el metodo "appendChild".
```js
for(let i = 0; i < 10; i++){
    const div = document.createElement('div');
    div.style.height = '100px';
    //genero los colores de forma random
    div.style.backgroundColor = colores[Math.floor(Math.random()*colores.length)];//se asigna un color ramdom
    
    body.appendChild(div);
}
```

#### Script 2 : Contenedores 1.2
Para el segundo script tome de referencia el script anterior y sobre ese hice las modificaciones correspondientes.
Dentro de las especificaciones pedidas esta que el color del fondo de cada contenedor fuera irrepetible y que el total de colores fuera de 20.
Por ello agregue 10 colores mas al arreglo "colores'.
```js
const colores = ['Red', 'Blue', 'Green', 'Pink', 'Orange', 
                'Yellow', 'Gray', 'Silver', 'Purple', 'Cyan', 
                'DarkMagenta', 'White', 'Aqua', 'Violet','Beige', 
                'Mustard', 'Turquoise', 'Brown','Lime', 'Terracotta',
            ];
```
Despues declare otro arreglo que poseera los colores usados para fondos.
```js
const coloresYaUsados = [];
```
Dentro del bucle declare una variable let para especificar el color de fondo que tendra el contenedor y le asigne el color random siempre y cuando no se repita, por ello el uso del metodo "includes".
```js
let colorDeFondo;

do{
    colorDeFondo = colores[Math.floor(Math.random()*colores.length)];//se asigna un color ramdom
}while(coloresYaUsados.includes(colorDeFondo));
```
Luego se anexa ese color al arreglo de colores usados y se le asignaba el color al contenedor.
Al final el bucle completo quedo de la siguiente forma:
```js
for(let i = 0; i < 10; i++){
    const div = document.createElement('div');
    let colorDeFondo;
    div.style.height = '100px';
    //genero los colores de forma random
    do{
        colorDeFondo = colores[Math.floor(Math.random()*colores.length)];//se asigna un color ramdom
    }while(coloresYaUsados.includes(colorDeFondo));

    coloresYaUsados.push(colorDeFondo);
    div.style.backgroundColor = colorDeFondo;
    
    body.appendChild(div);
}
```
