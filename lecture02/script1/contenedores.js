const body = document.querySelector('body');

const colores = ['Red', 'Blue', 'Green', 'Pink', 'Orange', 
                'Yellow', 'Gray', 'Silver', 'Purple', 'Cyan'
            ];

for(let i = 0; i < 10; i++){
    const div = document.createElement('div');
    div.style.height = '100px';
    //genero los colores de forma random
    div.style.backgroundColor = colores[Math.floor(Math.random()*colores.length)];//se asigna un color ramdom
    
    body.appendChild(div);
}