const body = document.querySelector('body');
const lorem = documen.querySelector('lorem');
const colores = ['Red', 'Blue', 'Green', 'Pink', 'Orange', 
                'Yellow', 'Gray', 'Silver', 'Purple', 'Cyan', 
                'DarkMagenta', 'White', 'Aqua', 'Violet','Beige', 
                'Mustard', 'Turquoise', 'Brown','Lime', 'Terracotta',
];
const coloresYaUsados = [];//arreglo para guardar los colores usados


for(let i = 0; i < 10; i++){
    const div = document.createElement('div');
    let colorParaElFondo;
    div.style.height = '100px';
    //genero los colores de forma random
    do{
        colorParaElFondo = colores[Math.floor(Math.random()*colores.length)];//se asigna un color ramdom
    }while(coloresYaUsados.includes(colorParaElFondo));

    coloresYaUsados.push(colorParaElFondo);

    div.style.backgroundColor = colorParaElFondo;
    body.appendChild(div);

    
}
