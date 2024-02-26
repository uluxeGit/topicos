const body = document.querySelector('body');
const colores = ['Red', 'Blue', 'Green', 'Pink', 'Orange', 
                'Yellow', 'Gray', 'Silver', 'Purple', 'Cyan', 
                'DarkMagenta', 'White', 'Aqua', 'Violet','Beige', 
                'Mustard', 'Turquoise', 'Brown','Lime', 'Terracotta',
];
const coloresYaUsados = [];


for(let i = 0; i < 10; i++){
    const div = document.createElement('div');
    let colorParaElFondo;
    div.style.height = '100px';
    //genero los colores de forma random
    do{
        colorParaElFondo = colores[Math.floor(Math.random()*colores.length)];
    }while(coloresYaUsados.includes(colorParaElFondo));

    coloresYaUsados.push(colorParaElFondo);

    div.style.backgroundColor = colorParaElFondo;
    body.appendChild(div);
}
