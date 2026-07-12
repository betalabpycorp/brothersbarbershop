console.log('✅ contacto.js cargado correctamente');

// Inicializar EmailJS
emailjs.init('ciXVeLi9VAySlSGT6');

// Enviar
window.enviarFormulario = function() {
    console.log('✅ Botón clickeado - Iniciando envío...');

    // Obtener elementos del DOM
    const formulario = document.getElementById('formulario');
    const btnEnviar = document.getElementById('btnEnviar');
    const mensajeEstado = document.getElementById('mensajeEstado');

    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const tipoConsulta = document.getElementById('tipo-consulta').value;
    const mensaje = document.getElementById('mensaje').value.trim();

    console.log('📝 Datos:', { nombre, apellido, email, telefono, asunto, tipoConsulta, mensaje });

    // Validación

    if (!nombre) {
        mostrarMensaje('⚠️ <strong>Complete este campo</strong> - Por favor, ingresá tu nombre.', 'error');
        document.getElementById('nombre').focus();
        document.getElementById('nombre').style.borderColor = '#f44336';
        return;
    }

    if (!apellido) {
        mostrarMensaje('⚠️ <strong>Complete este campo</strong> - Por favor, ingresá tu apellido.', 'error');
        document.getElementById('apellido').focus();
        document.getElementById('apellido').style.borderColor = '#f44336';
        return;
    }

    if (!email) {
        mostrarMensaje('⚠️ <strong>Complete este campo</strong> - Por favor, ingresá tu correo electrónico.', 'error');
        document.getElementById('email').focus();
        document.getElementById('email').style.borderColor = '#f44336';
        return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarMensaje('⚠️ <strong>Formato inválido</strong> - El correo debe ser válido (ej: usuario@dominio.com).', 'error');
        document.getElementById('email').focus();
        document.getElementById('email').style.borderColor = '#f44336';
        return;
    }

    if (!telefono) {
        mostrarMensaje('⚠️ <strong>Complete este campo</strong> - Por favor, ingresá tu número de teléfono.', 'error');
        document.getElementById('telefono').focus();
        document.getElementById('telefono').style.borderColor = '#f44336';
        return;
    }

    if (!asunto) {
        mostrarMensaje('⚠️ <strong>Complete este campo</strong> - Por favor, escribí un asunto para tu consulta.', 'error');
        document.getElementById('asunto').focus();
        document.getElementById('asunto').style.borderColor = '#f44336';
        return;
    }

    if (!tipoConsulta) {
        mostrarMensaje('⚠️ <strong>Seleccione una opción</strong> - Por favor, elegí el tipo de consulta.', 'error');
        document.getElementById('tipo-consulta').focus();
        document.getElementById('tipo-consulta').style.borderColor = '#f44336';
        return;
    }

    if (!mensaje) {
        mostrarMensaje('⚠️ <strong>Complete este campo</strong> - Por favor, escribí tu mensaje.', 'error');
        document.getElementById('mensaje').focus();
        document.getElementById('mensaje').style.borderColor = '#f44336';
        return;
    }

    // ========== SI TODOS LOS CAMPOS ESTÁN COMPLETOS ==========
    // Restaurar bordes
    document.querySelectorAll('.campo input, .campo select, .campo textarea').forEach(function(el) {
        el.style.borderColor = '#333';
    });

    // Deshabilitar botón
    btnEnviar.disabled = true;
    btnEnviar.textContent = 'Enviando...';
    mostrarMensaje('📤 Enviando mensaje...', 'info');

    // Parámetros para EmailJS
    const templateParams = {
        from_name: nombre + ' ' + apellido,
        from_email: email,
        telefono: telefono,
        asunto: asunto,
        tipo_consulta: tipoConsulta,
        mensaje: mensaje,
        to_name: 'The Brothers',
        fecha: new Date().toLocaleDateString('es-ES'),
        hora: new Date().toLocaleTimeString('es-ES')
    };

    console.log('📤 Enviando a EmailJS:', templateParams);

    // Enviar correo
    emailjs.send('service_zwk5bhe', 'template_nqf93nl', templateParams)
        .then(function(response) {
            console.log('✅ Correo enviado:', response);
            mostrarMensaje('✅ ¡Mensaje enviado con éxito! Te responderemos a la brevedad.', 'exito');
            formulario.reset();
            btnEnviar.disabled = false;
            btnEnviar.textContent = 'Enviar consulta';
            
            // Restaurar bordes
            document.querySelectorAll('.campo input, .campo select, .campo textarea').forEach(function(el) {
                el.style.borderColor = '#333';
            });
        })
        .catch(function(error) {
            console.error('❌ Error:', error);
            mostrarMensaje('❌ Hubo un error al enviar el mensaje. Por favor, intentá de nuevo.', 'error');
            btnEnviar.disabled = false;
            btnEnviar.textContent = 'Enviar consulta';
        });
}

// FUNCIÓN PARA MOSTRAR MENSAJES 
function mostrarMensaje(texto, tipo) {
    const mensajeEstado = document.getElementById('mensajeEstado');
    
    // Estilos para que se vea siempre arriba del header
    mensajeEstado.style.display = 'block';
    mensajeEstado.innerHTML = texto;
    mensajeEstado.style.position = 'fixed';
    mensajeEstado.style.top = '80px';
    mensajeEstado.style.left = '50%';
    mensajeEstado.style.transform = 'translateX(-50%)';
    mensajeEstado.style.zIndex = '9999';
    mensajeEstado.style.maxWidth = '500px';
    mensajeEstado.style.width = '90%';
    mensajeEstado.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
    mensajeEstado.style.borderRadius = '8px';
    mensajeEstado.style.padding = '15px';
    mensajeEstado.style.fontSize = '16px';
    mensajeEstado.style.textAlign = 'center';

    if (tipo === 'exito') {
        mensajeEstado.style.backgroundColor = '#1a3a1a';
        mensajeEstado.style.color = '#4caf50';
        mensajeEstado.style.border = '2px solid #4caf50';
    } else if (tipo === 'error') {
        mensajeEstado.style.backgroundColor = '#3a1a1a';
        mensajeEstado.style.color = '#f44336';
        mensajeEstado.style.border = '2px solid #f44336';
    } else {
        mensajeEstado.style.backgroundColor = '#1a2a3a';
        mensajeEstado.style.color = '#64b5f6';
        mensajeEstado.style.border = '2px solid #64b5f6';
    }

    if (tipo === 'exito') {
        setTimeout(() => {
            mensajeEstado.style.display = 'none';
        }, 8000);
    }
}

// Limpiar borde rojo al escribir
document.querySelectorAll('.campo input, .campo select, .campo textarea').forEach(function(el) {
    el.addEventListener('input', function() {
        this.style.borderColor = '#333';
        // Ocultar mensaje de error al empezar a escribir
        const mensajeEstado = document.getElementById('mensajeEstado');
        if (mensajeEstado.style.display === 'block') {
            mensajeEstado.style.display = 'none';
        }
    });
    el.addEventListener('change', function() {
        this.style.borderColor = '#333';
    });
});