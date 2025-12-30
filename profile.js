// Feature: Perfil de Usuario
// Desarrollado en rama feature/user-profile

// Cargar datos del perfil
window.addEventListener('load', function() {
    console.log('Perfil de usuario cargado');
    loadUserProfile();
});

// Cargar información del usuario
function loadUserProfile() {
    // Simular carga de datos del usuario
    const userData = {
        name: 'Juan Pérez',
        role: 'Desarrollador Full Stack',
        email: 'juan.perez@ejemplo.com',
        phone: '+34 600 123 456',
        bio: 'Apasionado por el desarrollo web y las metodologías ágiles. GitFlow enthusiast.',
        stats: {
            commits: 127,
            pullRequests: 23,
            issues: 89
        }
    };
    
    console.log('Datos cargados:', userData);
}

// Guardar cambios del perfil
document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        bio: document.getElementById('bio').value
    };
    
    console.log('Guardando cambios:', formData);
    
    // Simular guardado
    setTimeout(() => {
        alert('✅ Perfil actualizado correctamente');
        document.getElementById('userName').textContent = formData.fullName;
    }, 500);
});

// Cambiar contraseña
document.getElementById('changePasswordBtn').addEventListener('click', function() {
    const newPassword = prompt('Ingresa tu nueva contraseña:');
    if (newPassword) {
        console.log('Cambiando contraseña...');
        alert('✅ Contraseña actualizada con éxito');
    }
});

// Activar 2FA
document.getElementById('enable2FABtn').addEventListener('click', function() {
    const confirm2FA = confirm('¿Deseas activar la autenticación de dos factores?');
    if (confirm2FA) {
        console.log('Activando 2FA...');
        alert('✅ Autenticación 2FA activada. Revisa tu email para completar la configuración.');
    }
});

// Validación de email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validación de teléfono
function validatePhone(phone) {
    const re = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    return re.test(phone);
}
