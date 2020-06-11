import React from 'react'

const Producto = ({producto}) => {
  const {nombre, precio, id} = producto
  return ( 
    <div>
      <h3>Producto {nombre}</h3>
      <p>Precio: ${precio} </p>
      <hr/>
    </div>
   );
}
 
export default Producto;
