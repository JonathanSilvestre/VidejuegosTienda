// Verificar si el usuario está logueado al cargar la página
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Recupera el estado del login

// Referencia al contenedor del menú
const menuContent = document.getElementById('menu-content');

// Función para renderizar el contenido del menú
function renderMenu() {
    if (isLoggedIn) {
        // Contenido para usuarios logueados
        menuContent.innerHTML = `
            <ul>
                <li><a href="buscar.html">Buscar</a></li>
                <li><a href="cuenta.html">Cuenta</a></li>
                <li><a href="carrito.html">Carrito de Compras</a></li>
                <li><button onclick="logout()">Cerrar Sesión</button></li>
            </ul>
        `;
    } else {
        // Contenido para usuarios no logueados
        menuContent.innerHTML = `
            <ul>
                <li><a href="login.html">Login</a></li>
                <li><a href="registro.html">Registro</a></li>
            </ul>
        `;
    }
}

// Función para simular el inicio de sesión
function login() {
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true'); // Guarda el estado del login en localStorage
    alert('Has iniciado sesión.');
    window.location.href = 'menu.html'; // Redirige al menú
}

// Función para simular el cierre de sesión
function logout() {
    isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false'); // Actualiza el estado del login en localStorage
    alert('Has cerrado sesión.');
    renderMenu();
}

// Renderizar el menú al cargar la página
renderMenu();