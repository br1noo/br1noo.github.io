document.querySelector('img').onclick = () => {
    alert('PUTO EL QUE LEE');
};
const miTitular = document.querySelector('h1');
miTitular.textContent = 'Hola Mundiyo';
document.getElementById('prueba').onclick = cambiaContenido => {
    document.getElementById('prueba').textContent = 'ACM1PT';
    document.getElementById('prueba').style = 'color: red';
    document.getElementById('prueba').style = 'border: 4mm ridge rgba(170, 50, 220, .6)';
}


let myImage = document.querySelector('img');

myImage.onmouseover = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/perrito.jpg') {
        myImage.setAttribute('src', 'images/aaaaaaa dog.jpg');
    } else {
        myImage.setAttribute('src', 'images/perrito.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function nombreUsuario() {
    let miNombre = prompt('Sos alto Fuma Paraguayos con pelo de huevo y tu nombre es:');
    if (!miNombre) {
        nombreUsuario();
    } else {
        localStorage.setItem('name', miNombre);
        miTitulo.textContent = 'El porro revive neuronas! ', +miNombre;
    }
}

if (!localStorage.getItem('name')) {
    nombreUsuario();
} else {
    let nombreGuardado = localStorage.getItem('name');
    miTitulo.textContent = 'Toma vino, toma birra, Bob ' + nombreGuardado;
}

miBoton.onclick = () => {
    nombreUsuario();
    location.reload();
}