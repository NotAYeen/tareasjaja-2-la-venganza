const boton = document.getElementById('miBoton');
const body = document.body;

// Color inicial
let colorInicial = body.style.backgroundColor || 'pink';

boton.addEventListener('click', () => {
    body.style.backgroundColor = 'lightblue';
});

boton.addEventListener('mouseout', () => {
    body.style.backgroundColor = colorInicial;
});

//responsive
body.style.width = '100%';
body.style.height = '100%';
body.style.margin = 0;