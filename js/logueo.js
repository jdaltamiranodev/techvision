const btnImagen = document.querySelector('#contenedor-imagen');
const imagen = document.querySelector('.imagen-ojo');
const entradaUsuario = document.querySelector('#usuario');
const entradaContraseña = document.querySelector('#contraseña');

const btnEnviar = document.querySelector('.btnlogin');

const usuarioPorDefecto = 'david';
const contraseñaPorDefecto = '123456';
const imagenUno = 'ojoCerrado.jpg';
const imagenDos = 'ojoAbierto.jpg';

btnImagen.addEventListener('click', cambiarImagen);

// // Iniciar sesión
function cambiarImagen() {
    let estadoActual = imagen.src.split('/').pop();

    if (estadoActual === imagenUno) {
        imagen.src = 'img/' + imagenDos;
        entradaContraseña.setAttribute('type', 'text');
    } else {
        imagen.src = 'img/' + imagenUno;
        entradaContraseña.setAttribute('type', 'password');
    }
}

// Iniciar sesión
btnEnviar.addEventListener('click', verificarLogin);

function verificarLogin() {
    const usuario = entradaUsuario.value;
    const contraseña = entradaContraseña.value;

    if (usuario === usuarioPorDefecto && contraseña === contraseñaPorDefecto) {
        alert('Inicio de sesión exitoso');
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}