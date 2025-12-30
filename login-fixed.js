// HOTFIX: Corrección de bug crítico en validación de login
// Bug encontrado: El sistema permitía login con campos vacíos
// Fecha: 30 de diciembre de 2025
// Prioridad: CRÍTICA

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // HOTFIX: Validación mejorada para prevenir campos vacíos
    if (!username || username.length < 3) {
        alert('⚠️ El usuario debe tener al menos 3 caracteres');
        return;
    }
    
    if (!password || password.length < 5) {
        alert('⚠️ La contraseña debe tener al menos 5 caracteres');
        return;
    }
    
    console.log('Intentando login con:', username);
    
    // Simular autenticación
    if (username === 'admin' && password === '12345') {
        alert('¡Login exitoso! Bienvenido ' + username);
        // Redirigir al dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('❌ Credenciales incorrectas');
    }
});

// Función para validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// HOTFIX: Añadir prevención de inyección SQL básica
function sanitizeInput(input) {
    return input.replace(/[<>'"]/g, '');
}
