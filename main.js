// Variables para almacenar los productos del carrito y el total
let carrito = [];
let total = 0;

// Seleccionar los elementos del DOM
const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
const listaCarrito = document.getElementById('carrito');
const totalElemento = document.getElementById('total');
const mensajeElemento = document.getElementById('mensaje');
const botonFinalizarCompra = document.getElementById('finalizar-compra');
const botonCancelarCompra = document.getElementById('cancelar-compra');
const botonDeshacerMovimiento = document.getElementById('deshacer-movimiento');

// Función para agregar producto al carrito
botonesAgregarCarrito.forEach(boton => 
    boton.addEventListener('click', e => {
        const producto = e.target.dataset.producto;
        const precio = parseFloat(e.target.dataset.precio);

        carrito.push({ producto, precio });
        total += precio;

        actualizarCarrito();
    })
);

// Función para actualizar el carrito en el DOM
const actualizarCarrito = () => {
    listaCarrito.innerHTML = carrito.map(item => 
        `<li>${item.producto} - $${item.precio}</li>`
    ).join('');

    totalElemento.textContent = total.toFixed(2);
    mensajeElemento.textContent = "";  // Limpiar el mensaje al actualizar
};

// Función para finalizar la compra
botonFinalizarCompra.addEventListener('click', () => {
    carrito = [];
    total = 0;
    actualizarCarrito();
    mensajeElemento.textContent = "Compra finalizada. ¡Gracias por tu compra!";
});

// Función para cancelar toda la compra
botonCancelarCompra.addEventListener('click', () => {
    carrito = [];
    total = 0;
    actualizarCarrito();
    mensajeElemento.textContent = "Compra cancelada.";
});

// Función para deshacer el último movimiento
botonDeshacerMovimiento.addEventListener('click', () => {
    const ultimoProducto = carrito.pop() ?? null;  // Si no hay productos, no hace nada
    total -= ultimoProducto ? ultimoProducto.precio : 0;
    actualizarCarrito();
    mensajeElemento.textContent = ultimoProducto ? "Último producto eliminado." : "No hay productos para deshacer.";
});
