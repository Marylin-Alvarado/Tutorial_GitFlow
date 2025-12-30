// Feature: Dashboard Principal
// Desarrollado en rama feature/dashboard

// Cargar datos del dashboard
window.addEventListener('load', function() {
    console.log('Dashboard cargado correctamente');
    updateDashboardData();
});

// Actualizar datos del dashboard
function updateDashboardData() {
    // Simular carga de datos
    const stats = {
        users: Math.floor(Math.random() * 2000) + 1000,
        projects: Math.floor(Math.random() * 50) + 20,
        tasks: Math.floor(Math.random() * 100) + 50
    };
    
    document.getElementById('totalUsers').textContent = stats.users.toLocaleString();
    document.getElementById('activeProjects').textContent = stats.projects;
    document.getElementById('pendingTasks').textContent = stats.tasks;
}

// Botón de logout
document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('¿Seguro que quieres cerrar sesión?')) {
        console.log('Cerrando sesión...');
        window.location.href = 'login.html';
    }
});

// Botones de acciones rápidas
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Funcionalidad: ' + this.textContent);
    });
});

// Actualizar dashboard cada 30 segundos
setInterval(updateDashboardData, 30000);
