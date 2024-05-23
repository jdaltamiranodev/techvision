const btnPolitica = document.querySelector('#politica');
const btnEnviar = document.querySelector('#enviar');
const imagen = document.querySelector('.imagen');
const btnCambio = document.querySelector('#cambiar');

const fechaActual = document.querySelector('#fecha');
const diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let estadoActual = 'img/ai-pin-lunar-front.jpg';


btnPolitica.addEventListener('change', habilitarBoton);

function habilitarBoton() {
    if (btnPolitica.checked) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}

function mostrarFecha() {
    const fecha = new Date();
    const diaMes = fecha.getDate();
    const mesActual = fecha.getMonth();
    const diaActual = fecha.getDay();
    const horaActual = fecha.getHours();
    const minutoActual = fecha.getMinutes();
    const anio = fecha.getFullYear();

    let dia = diaSemana[diaActual];
    let mes = meses[mesActual];
    //alert(jornada);

    // Formatear horas y minutos
    let horas = horaActual < 10 ? `0${horaActual}` : horaActual;
    let minutos = minutoActual < 10 ? `0${minutoActual}` : minutoActual;

    fechaActual.innerHTML = `${dia} ${diaMes} de ${mes} de ${anio}, ${horas}:${minutos}`;
}

mostrarFecha();

btnCambio.addEventListener('click', cambiarImagen);

function cambiarImagen() {
    const imagenUno = 'img/ai-pin-lunar-front.jpg';
    const imagenDos = 'img/ai-pin-equinox-front.jpg';

    if (estadoActual === imagenUno) {
        estadoActual = imagenDos;
        console.log(estadoActual);

    } else {
        estadoActual = imagenUno;
        console.log(estadoActual);
    }
    console.log(estadoActual);
    imagen.src = estadoActual;
}