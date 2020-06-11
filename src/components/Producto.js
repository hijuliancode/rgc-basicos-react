import React from 'react'

const Producto = ({producto}) => {
  const {nombre, precio, id} = producto
  const agregarAlCarrito = () => {
    console.log('Comprando... ', id)
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
