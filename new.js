alert ("Elegi los componentes de tu computadora")
    

const componentespc= [

{producto:"procesador", marca: "AMD ryzen 5", precio: 50000 },
{producto:"gráfica", marca: "RTX3050", precio: 60000},
{producto:"Ram", marca: "Ram Kingston", precio: 20000},
{producto:"Gabinete", marca: "Corsair", precio: 10000},
{producto:"Fuente", marca: "coolermaster", precio: 20000},
{producto:"placa madre", marca: "Placa madre Asus", precio: 25000},
]

const carrito= []

let propuesta = prompt ( "¿Desea comprar algun producto?")

while ( propuesta != "si" && propuesta != "no") {

    alert ("Responda por si o por no")
    propuesta = prompt ("¿Deseas comprar algun producto? (Si o No)")
}

if  (propuesta == "si") {

    alert ("Puede ver los productos a continuación")
    let todosLosProductos= componentespc.map (
        (comp) => comp.producto + " " + comp.precio + "$"
    );

    alert (todosLosProductos.join(" - "))


}

else if (propuesta == "no") {

    alert ("Muchas gracias vuelva prontos")

}

while ( propuesta != "no") {
    let comp = prompt ( "agrega un producto a tu carrito")

    let productoEncontrado = componentespc.find ((item) => item.producto==comp )

    if (productoEncontrado != undefined) {

        let unidades = parseInt (prompt("¿Cuantas unidades quiere llevar?"))

        carrito.push ({nombre:comp, cantidad: unidades, precio:productoEncontrado.precio})
        console.log (carrito)
    } else {
        alert ("No tenemos ese producto")
    }
    propuesta = prompt ("¿Desea algun otro producto? si/no")

    if (propuesta === "no") {

    alert ("Gracias por su compra")
    carrito.forEach ((final) => {
        console.log (`comp: ${final.nombre}, unidades ${final.cantidad}, total a pagar por el producto ${final.cantidad * final.precio} `)
    })
}

}

const total = carrito.reduce ((acc,el)=> acc + el.precio * el.cantidad, 0) 
console.log (`El total a pagar por su compra : ${total}`)


