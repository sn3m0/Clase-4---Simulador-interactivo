function calcularPrecio(precioObjeto, cantidadObjeto, porcentajeDescuento, costoEnvio) {

    let descuento = (precioObjeto * porcentajeDescuento) / 100;

    let precioConDescuento = precioObjeto - descuento;
    return (precioConDescuento * cantidadObjeto) + costoEnvio;
}

const envio = 400; //valor aproximado del costo de envio promedio dentro de MDEO

let objeto = parseFloat(prompt("Ingrese el precio indicado en la página:"));
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar de este hardware:"));
let descuento = parseInt(prompt("Ingresa el porcentaje de descuento:"))

let precioFinal = calcularPrecio(objeto, cantidad, descuento, envio);
alert("El total a pagar es $" + precioFinal);
alert("Llegará un comprobante a tu correo de usuario en breves");