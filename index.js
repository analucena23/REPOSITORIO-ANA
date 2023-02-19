const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(evento) {
  evento.preventDefault();

  const nombre = document.querySelector('#nombre').value;
  const email = document.querySelector('#email').value;
  const clave = document.querySelector('#clave').value;
  const confirmarClave = document.querySelector('#confirmar-clave').value;

  if (nombre === '' || email === '' || clave === '' || confirmarClave === '') {
    alert('Por favor, llena todos los campos del formulario');
    return false;
  }

  const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!expresionRegular.test(email)) {
    alert('Por favor, ingresa un correo electrónico válido');
    return false;
  }

  if (clave !== confirmarClave) {
    alert('Las claves no coinciden. Por favor, inténtalo de nuevo');
    return false;
  }

  alert('El formulario ha sido enviado con éxito!');
});