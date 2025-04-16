// Estado inicial: el usuario no está logueado
let isLoggedIn = false;

// Referencias a los elementos del DOM
const btnMenu = document.getElementById('btn-menu');
const submenu = document.getElementById('submenu');

// Función para mostrar el submenú
function toggleSubmenu() {
    submenu.classList.toggle('hidden');
    renderSubmenuOptions();
}

// Función para renderizar las opciones del submenú
function renderSubmenuOptions() {
    if (isLoggedIn) {
        // Opciones para usuarios logueados
        submenu.innerHTML = `
            <ul>
                <li><a href="buscar.html">Buscar</a></li>
                <li><a href="cuenta.html">Cuenta</a></li>
                <li><a href="carrito.html">Carrito de Compras</a></li>
            </ul>
        `;
    } else {
        // Opciones para usuarios no logueados
        submenu.innerHTML = `
            <ul>
                <li><a href="login.html">Login</a></li>
                <li><a href="registro.html">Registro</a></li>
            </ul>
        `;
    }
}

// Evento para mostrar/ocultar el submenú
btnMenu.addEventListener('click', toggleSubmenu);

// Simulación de login (puedes reemplazar esto con lógica real)
function login() {
    isLoggedIn = true;
    alert('Usuario logueado con éxito');
    renderSubmenuOptions();
}

// Simulación de logout
function logout() {
    isLoggedIn = false;
    alert('Usuario deslogueado');
    renderSubmenuOptions();
}