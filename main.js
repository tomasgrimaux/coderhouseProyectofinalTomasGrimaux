//mi nombre es Tomas grimaux, bienvenido a mi primer Entrega!
//mi proyecto es un ecommerce de zapatillas las mas top del mercado!. para integrar JS como primer partida se me ocurrio 


//PRIMER OPCION

let unPais = parseFloat(prompt("origen, indique 1 si es de Argentina o 2 si es resto del mundo y presione OK"));

//let tipoMoneda1 = "Arg";
//let tipoMoneda2 = "USD";

if (unPais == "1"){
    alert("los precios de los productos van a estar expresados en pesos Argentinos!");
}
if (unPais == "2"){
   alert("como no sos de Argentina los precios van a estar reflejados en Dolares USD")
}

//SEGUNDA OPCION

//intente hacer el mismo codigo con switch y tambien me funciona para esta pagina

//let unPais = parseFloat(prompt("origen, indique 1 si es de Argentina o 2 si es resto del mundo y presione OK"));

//switch (unPais){
    //case 1:
    //alert("los precios de los productos van a estar expresados en pesos Argentinos!");
   // break;
   // case 2:
   // alert("como no sos de Argentina los precios van a estar reflejados en Dolares USD");
   // break;
//}


//TERCERA OPCION

//do while + switch mi idea aca principal es que cuando el cliente elija el pais de origen si es de argentina los precios esten en pesos, si es de resto del mundo los valores esten expresados en dolares.


//let unPais = parseFloat(prompt("origen, indique 1 si es de Argentina o 2 si es resto del mundo y presione OK"));

//while (unPais == 1){
    //switch (unPais){
        //case 1:
       // alert("los precios de los productos van a estar expresados en pesos Argentinos!");
       // break;
//}
    //alert("como no sos de Argentina los precios van a estar reflejados en Dolares USD");
//}




//segunda entrega
//agregar producto como provedor.


const listaZapatillas = [
    {marca: "adidas", descripcion: "para correr", genero: 'outdoor', precio: 10000, talle: 11},
    {marca: "nike", descripcion: "para salir", genero: 'outdoor', precio: 20000, talle: 11},
    {marca: "reebook", descripcion: "para correr", genero: 'outdoor', precio: 14000, talle: 11},
    {marca: "adidas", descripcion: "para salir", genero: 'outdoor', precio: 13000, talle: 13},
    {marca: "topper", descripcion: "para hockey", genero: 'outdoor', precio: 15000, talle: 15},
    {marca: "balenciaga", descripcion: "para salir", genero: 'outdoor', precio: 13300, talle: 9},
    
];

class Zapatilla {
    constructor(marca, descripcion, genero, precio, talle) {
        this.marca = marca;
        this.descripcion = descripcion;
        this.genero = genero;
        this.precio = precio;
        this.talle = talle;
    }
}

const agregarProducto = () => {
    let marca = prompt("Marca de Zapatilla?");
    let descripcion = prompt("Breve Descripcion");
    let genero = prompt("tipo de zapatilla");
    let precio = parseFloat(prompt("Que precio tiene?"));
    let talle = parseFloat(prompt("talle"));

    let productoNuevo = new Zapatilla(marca, descripcion, genero, precio, talle);

    listaZapatillas.push(productoNuevo);
}

var miCarrito = [];

class Carrito {
    constructor(marca, precio, talle) {
        this.marca = marca;
        this.precio = precio;
        this.talle = talle;
    }
}

const agregarCarrito = () => {

    let productoSeleccionado = new Carrito(marca, precio, talle);

    miCarrito.push(productoSeleccionado);
}


function actualizarMicarrito(miCarrito, seleccion) {
    if (miCarrito.indexOf(seleccion) === -1) {
        miCarrito.push(seleccion);
    
    } else if (miCarrito.indexOf(seleccion) > -1) {
        alert (`El siguiente producto ya esta en tu carrito ${seleccion}`);
    }
}

//filtros
let buscarPorPrecioAlto = listaZapatillas.filter(producto => producto.precio > 15001);
let buscarPorPrecioBajo = listaZapatillas.filter(producto => producto.precio < 15000);

//funcion suma total de precio en mi carrito con map y reduce

const sumall = miCarrito.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);
console.log(sumall);

//carrito pero con el descuento del 10%
let miCarritocondescuento = listaZapatillas.map(producto => producto.precio = producto.precio * 0.90);


//este codigo no se por que me tira error.
//listaZapatillas.forEach((producto)=> {
    //console.log(`este producto es ${producto.nombre}, su precio es $${producto.precio} y su talle es N${producto.preciotalle}`
//});


