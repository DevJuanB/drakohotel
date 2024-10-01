let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    const totalPuntos = document.getElementById('total-puntos');
    carritoItems.innerHTML = '';
    carrito.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('carrito-item');
        div.innerHTML = `<p>${item.producto}</p><p>${item.precio} puntos</p>`;
        carritoItems.appendChild(div);
    });
    totalPuntos.textContent = `Total: ${total} puntos`;
}

function finalizarCompra() {
    alert(`Compra finalizada. Total: ${total} puntos`);
    carrito = [];
    total = 0;
    actualizarCarrito();
}

function buscarProducto() {
    const input = document.getElementById('buscar').value.toLowerCase();
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        const nombre = producto.querySelector('h3').textContent.toLowerCase();
        producto.style.display = nombre.includes(input) ? 'block' : 'none';
    });
}
