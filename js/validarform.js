// ============ EMAILJS ============
// Inicializar EmailJS (reemplazá con tu User ID)
emailjs.init('TU_USER_ID');

// ============ VALIDACIONES DEL FORMULARIO ============
document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();

    // Limpiar errores
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    let valido = true;

    // Nombre
    let nombre = document.getElementById('nombre');
    if (nombre.value.trim() === '') {
        document.getElementById('error-nombre').textContent = 'Ingresá tu nombre';
        valido = false;
    }

    // Apellido
    let apellido = document.getElementById('apellido');
    if (apellido.value.trim() === '') {
        document.getElementById('error-apellido').textContent = 'Ingresá tu apellido';
        valido = false;
    }

    // Email
    let email = document.getElementById('email');
    if (email.value.trim() === '') {
        document.getElementById('error-email').textContent = 'Ingresá tu correo';
        valido = false;
    }

    // Teléfono
    let telefono = document.getElementById('telefono');
    if (telefono.value.trim() === '') {
        document.getElementById('error-telefono').textContent = 'Ingresá tu teléfono';
        valido = false;
    }

    // Asunto
    let asunto = document.getElementById('asunto');
    if (asunto.value.trim() === '') {
        document.getElementById('error-asunto').textContent = 'Escribí un asunto';
        valido = false;
    }

    // Tipo consulta
    let tipo = document.getElementById('tipo-consulta');
    if (tipo.value === '') {
        document.getElementById('error-tipo').textContent = 'Seleccioná una opción';
        valido = false;
    }

    // Mensaje
    let mensaje = document.getElementById('mensaje');
    if (mensaje.value.trim() === '') {
        document.getElementById('error-mensaje').textContent = 'Escribí tu mensaje';
        valido = false;
    }

    // Si todo está válido
    if (valido) {

        // Mostrar mensaje de enviando
        const btn = document.querySelector('button[type="submit"]');
        const textoOriginal = btn.textContent;
        btn.textContent = 'Enviando...';
        btn.disabled = true;

        // ============ ENVIAR CON EMAILJS ============
        const templateParams = {
            nombre: nombre.value,
            apellido: apellido.value,
            email: email.value,
            telefono: telefono.value,
            asunto: asunto.value,
            tipo_consulta: tipo.value,
            mensaje: mensaje.value
        };

        emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('Correo enviado:', response);
                alert('¡Mensaje enviado con éxito! Te responderemos a la brevedad.');
                document.getElementById('formulario').reset();
            })
            .catch(function(error) {
                console.error('Error al enviar:', error);
                alert('Hubo un error al enviar el mensaje. Intentá de nuevo más tarde.');
            })
            .finally(function() {
                btn.textContent = textoOriginal;
                btn.disabled = false;
            });
    }
});