

class Zapatilla {
    constructor(id, marca, descripcion, genero, precio, talle) {
        this.id = id;
        this.marca = marca;
        this.descripcion = descripcion;
        this.genero = genero;
        this.precio = precio;
        this.talle = talle;
    }
}

const listaZapatillas = [
    {id:1, marca: "adidas", descripcion: "para correr", genero: 'outdoor', precio: 10000, talle: 11},
    {id:2, marca: "nike", descripcion: "para salir", genero: 'outdoor', precio: 20000, talle: 11},
    {id:3, marca: "reebook", descripcion: "para correr", genero: 'outdoor', precio: 14000, talle: 11},
    {id:4, marca: "adidas", descripcion: "para salir", genero: 'outdoor', precio: 13000, talle: 13},
    {id:5, marca: "topper", descripcion: "para hockey", genero: 'outdoor', precio: 15000, talle: 15},
    {id:6, marca: "balenciaga", descripcion: "para salir", genero: 'outdoor', precio: 13300, talle: 9},
    
];

//guaro lista en el storage json
for (const zapas of listaZapatillas) {
    localStorage.setItem("listaProductos", JSON.stringify(listaZapatillas))
}
//CON ESTO MUESTRO LAS ZAPATILLAS GUARDAS EN EL JSON CONM UNA FUNCION EN LA PAGINA PRODUCTOS.
listaZapatillas.forEach(producto => {
    let contenedorProd = document.createElement("article");
    contenedorProd.className = 'producto';
    contenedorProd.innerHTML = `
                    <h3 id='${producto.id}'>${producto.marca}</h3>
                    <p>${producto.descripcion}</p>
                    <p>$${producto.precio}</p>
                    <img src="IMG/vans.png" />
                    `;
    document.querySelector("#productos").append(contenedorProd);
})



//formulario de carga zapatiullas

const formulario = document.getElementById("formulario");
const marca = document.getElementById("marca");
const descripcion = document.getElementById("descripcion");
const genero = document.getElementById("genero");
const precio = document.getElementById("precio");
const talle = document.getElementById("talle");

formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
    checkInputs();
});

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

const checkInputs = () => {

    let marcaValor = marca.value.trim();
    let descripcionValor = descripcion.value.trim();
    let generoValor = genero.value.trim();
    let precioValor = parseInt(precio.value.trim());
    let talleValor = talle.value.trim();



    if (marcaValor === '') {
        setErrorFor(marca, 'La Marca es obligatoria');

    } else {
        marcaValor == String;
        etSuccessFor(marca);
        
    }

    if (descripcionValor === '') {
        setErrorFor(descripcion, 'La descripcion es obligatoria');

    } else {
        descripcionValor == String;
        setSuccessFor(descripcion);
    }

    if (generoValor === '') {
        setErrorFor(genero, 'el Genero es obligatoria');

    } else {
        descripcionValor == String;
        setSuccessFor(genero);
    }

    if (precioValor === '') {
        setErrorfor(precio, 'el precio es obligatoria');

    } else {
        precioValor == Boolean;
        estadoCorrecto(nprecio);
    }

    if (talleValor === '') {
        setErrorFor(talle, 'el talle es obligatoria');

    } else {
        talleValor== Boolean;
        etSuccessFor(talle);
    }

}

//codigo viejo que no quiero perder
//const agregarProducto = () => {
   // let marca = prompt("Marca de Zapatilla?");
    //let descripcion = prompt("Breve Descripcion");
    //let genero = prompt("tipo de zapatilla");
   // let precio = parseFloat(prompt("Que precio tiene?"));
    //let talle = parseFloat(prompt("talle"));

   // let productoNuevo = new Zapatilla(marca, descripcion, genero, precio, talle);

    //listaZapatillas.push(productoNuevo);
//-}







//carrito esto esta siendo adaptado recien ahora me faltan modificar varias cosas
let carrito = [];

const btnCarrito = document.querySelector("#cart");
const ventanaCarrito = document.querySelector(".cart-modal-overlay");
const cerrarCarrito = document.querySelector("#close-btn");
const botonesComprar = document.querySelectorAll(".add-to-cart");
const contenedorCarrito = document.querySelector(".product-rows");
const totalCarrito = document.querySelector('.total-price');
const totalProducto = document.querySelector(".cart-quantity");


// abrir 
btnCarrito.addEventListener("click", ()=> {
    ventanaCarrito.classList.add("open");
})

//cerrar 
cerrarCarrito.addEventListener("click", ()=> {
    ventanaCarrito.classList.remove("open");
})

//agregar a cada boton la funcion para agregar el producto al carrito
botonesComprar.forEach(boton => {
    boton.addEventListener("click", agregarCarrito);
})



function agregarCarrito(e){
    boton = e.target;
    let padre = boton.parentElement;
    let prodID = padre.getAttribute("id");
    let nombreProd = padre.querySelector("h4").textContent;
    let precio = parseFloat(padre.querySelector('.product-price').textContent.replace("$", ""));
    
    const prodCarrito = new Producto(prodID,nombreProd, precio);

    carrito.push(prodCarrito);
    popularCarrito();
    ActualizarCantidadCarrito();
}

function popularCarrito(){
    contenedorCarrito.innerHTML = '';
    carrito.forEach(producto => {
        contenedorCarrito.innerHTML += `
            <div class='product-row' id='${producto.id}'>
                <span>${producto.nombre}</span>
                <span class='cart-price'>$${producto.precio}</span>
                <input type='number' value='1' class="product-quantity" />
                <button class="remove-btn">Borrar</button>
            </div>
        `
    })
    actualizarTotal();
    
}

function actualizarTotal() {
    let total = carrito.reduce((acc, producto)=>{ 
        return acc + producto.precio 
    },0)
    // console.log(total)
    totalCarrito.innerHTML = `$${total}`
}

function ActualizarCantidadCarrito () {
    totalProducto.textContent = carrito.length;
}

//filtros
let buscarPorPrecioAlto = listaZapatillas.filter(producto => producto.precio > 15001);
let buscarPorPrecioBajo = listaZapatillas.filter(producto => producto.precio < 15000);

//funcion suma total de precio en mi carrito con map y reduce

const sumall = miCarrito.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);
console.log(sumall);

//carrito pero con el descuento del 10%
let miCarritocondescuento = listaZapatillas.map(producto => producto.precio = producto.precio * 0.90);



