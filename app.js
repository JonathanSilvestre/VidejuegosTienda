const carrito = [];

function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  listaCarrito.innerHTML = '';
  carrito.forEach((producto, index) => {
    const item = document.createElement('li');
    item.textContent = producto;
    listaCarrito.appendChild(item);
  });
}

function toggleMenu() {
  const submenu = document.getElementById('submenu');
  submenu.classList.toggle('hidden');
}

function iniciarSesion() {
  alert('Iniciar sesión no está implementado aún.');
}