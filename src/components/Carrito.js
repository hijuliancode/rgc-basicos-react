import React from 'react'
import './carrito.css';
import Producto from './Producto'

const Carrito = ({carrito, agregarProducto}) => (
  <div className="carrito">
    <h2>Carrito de compras</h2>
    <ul>
      {!carrito.length
        ? <p>No hay elementos</p>
        : carrito.map(producto => (
            <Producto
              key={`${Math.floor(Math.random() * 31231)}`}
              producto={producto}
              carrito={carrito}
              agregarProducto={agregarProducto}
            />
          ))
      }
    </ul>
  </div>
)

export default Carrito ;
