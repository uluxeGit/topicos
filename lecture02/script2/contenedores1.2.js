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
    //genero los colores de forma random
    do{
        colorDeFondo = colores[Math.floor(Math.random()*colores.length)];//se asigna un color ramdom
    }while(coloresYaUsados.includes(colorDeFondo));

    coloresYaUsados.push(colorDeFondo);
    div.style.backgroundColor = colorDeFondo;
    
    body.appendChild(div);
}