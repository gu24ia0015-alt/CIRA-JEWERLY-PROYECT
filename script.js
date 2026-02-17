const productos = [

    { id: 1, nombre: "Aura Solar", precio: 4500, categoria: "anillos", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=60" },
    { id: 2, nombre: "Promesa Eterna", precio: 3200, categoria: "anillos", img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=500&q=60" },
    { id: 3, nombre: "Corazón Real", precio: 5100, categoria: "anillos", img: "https://images.unsplash.com/photo-1589674781759-c21c37956311?auto=format&fit=crop&w=500&q=60" },
    { id: 4, nombre: "Luz de Diamante", precio: 8500, categoria: "anillos", img: "https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=500&q=60" },
    { id: 5, nombre: "El Solitario", precio: 2900, categoria: "anillos", img: "https://images.unsplash.com/photo-1598560976505-d41c19b6e8e0?auto=format&fit=crop&w=500&q=60" },


    { id: 6, nombre: "Doble Destello", precio: 1800, categoria: "collares", img: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=500&q=60" },
    { id: 7, nombre: "Ópalo de Fuego", precio: 2500, categoria: "collares", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=60" },
    { id: 8, nombre: "Corazón del Océano", precio: 3100, categoria: "collares", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=500&q=60" },
    { id: 9, nombre: "Anatomía de Plata", precio: 1950, categoria: "collares", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=60" },
    { id: 10, nombre: "Nombre Áureo", precio: 2200, categoria: "collares", img: "https://images.unsplash.com/photo-1601121141461-9c6da6d05f05?auto=format&fit=crop&w=500&q=60" },

    { id: 11, nombre: "Amor Infinito", precio: 1200, categoria: "pulseras", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=500&q=60" },
    { id: 12, nombre: "Brazalete Tiffany", precio: 5600, categoria: "pulseras", img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=500&q=60" },
    { id: 13, nombre: "Cadena de Plata", precio: 1500, categoria: "pulseras", img: "https://images.unsplash.com/photo-1602751584552-8ba420552259?auto=format&fit=crop&w=500&q=60" },
    { id: 14, nombre: "Eslabón Cubano", precio: 2800, categoria: "pulseras", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=60" },
    { id: 15, nombre: "Perlas de Río", precio: 3400, categoria: "pulseras", img: "https://images.unsplash.com/photo-1599643477877-53135375f97e?auto=format&fit=crop&w=500&q=60" }
];



const contenedorJoyas = document.getElementById('contenedor-joyas');

function cargarProductos() {
    contenedorJoyas.innerHTML = ""; 
    
    productos.forEach(producto => {
       
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card');
        
        tarjeta.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <div class="card-info">
                <h3>${producto.nombre}</h3>
                <span class="precio">$${producto.precio}</span>
                <button class="btn-agregar" onclick="agregarAlCarrito('${producto.nombre}')">
                    Agregar al Carrito
                </button>
            </div>
        `;
        
        contenedorJoyas.appendChild(tarjeta);
    });
}