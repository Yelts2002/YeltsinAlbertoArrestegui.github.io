// JavaScript source code
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if (usuario.length == 0) {
        alert('No has escrito nada en el usuario');
        return;
    }
    var clave = document.getElementById('clave').value;
    if (clave.length == 0) {
        alert('No has escrito nada en la clave');
        return;
    }
    if (clave.length < 6) {
        alert('La clave es muy corta');
        return;
    }
    var clave2 = document.getElementById('clave2').value;
    if (clave===clave2) {
        alert('Registro exitoso')
        return;
    } else {
        alert('Las claves no coinciden');
        return;
    }
    if (validarFormulario() == true) {
        alert('Registro exitoso');
        return;
    }
    this.submit();
}