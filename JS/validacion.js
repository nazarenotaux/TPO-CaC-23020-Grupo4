var Nombre = document.getElementById ('Nombre');
var Apellido = document.getElementById ('Apellido');
var Email = document.getElementById ('Email');
var Telefono = document.getElementById ('Telefono');
var Experiencia = document.getElementById ('Experiencia');
var Genero = document.getElementById ('Genero')
var seleccionado = false;
var error = document.getElementById('error');

function enviarFormulario() {
    console.log('Validando formulario...');

    var Nombre = document.getElementById('Nombre').value;
    var Apellido = document.getElementById('Apellido').value;
    var Email = document.getElementById('Email').value;
    var Telefono = document.getElementById('Telefono').value;
    var Experiencia = document.getElementById('Experiencia').value;

    var mensajesError = [];

    if (Nombre === '') {
        mensajesError.push('Nombre');
    }

    if (Apellido === '') {
        mensajesError.push('Apellido');
    }

    if (Email === '') {
        mensajesError.push('Email');
    }

    if (Telefono === '') {
        mensajesError.push('Telefono');
    }
    
    if (Experiencia === '') {
        mensajesError.push('Experiencia');
    }

    if (Email.includes("@") && Email.includes(".com") ) {
    } else{
        mensajesError.push('Mail');
    }

    if (/^\d+$/.test(Telefono)) {
      } else {
        mensajesError.push('Telefono');
      }

    if (mensajesError.length > 0) {
        var mensaje = 'Completa los siguientes datos correctamente: ' + mensajesError.join(', ');
        console.log(mensaje);
        alert(mensaje);
        return false;
    }

    console.log('Formulario validado y enviado exitosamente.');
    alert('Formulario validado y enviado exitosamente.');

    return false;
}