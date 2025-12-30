// Feature: Sistema de Login
// Desarrollado en rama feature/login

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validación básica
    if (username && password) {
        console.log('Intentando login con:', username);
        
        // Simular autenticación
        if (username === 'admin' && password === '12345') {
            alert('¡Login exitoso! Bienvenido ' + username);
            // Redirigir al dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert('Credenciales incorrectas');
        }
    }
});

// Función para validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
