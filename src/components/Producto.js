import React from 'react'

const Producto = ({producto, productos, carrito, agregarProducto}) => {
  const {nombre, precio, id} = producto
  const agregarAlCarrito = (id) => {
    const producto = productos.filter(producto => producto.id === id)[0] // [0], porque filter crea un arreglo de objetos, y necesitamos el solo el objeto
    agregarProducto([
      ...carrito,
      producto
    ])
  }
  return (
    <div>
      <h3>Producto {nombre}</h3>
      <p>Precio: ${precio} </p>
      <button
        type="button"
        onClick={() => agregarAlCarrito(id)}
      >Comprar</button>
      <hr/>
    </div>
   );
}

export default Producto;
