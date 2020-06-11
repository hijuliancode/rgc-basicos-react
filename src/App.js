import React, {Fragment, useState} from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Producto from "./components/Producto"
import Carrito from "./components/Carrito"

function App() {
  const fecha = new Date().getFullYear()
  // Crear listado de productos
  const [productos, guardarProductos] = useState([
    {id: 0, nombre: 'Camiseta ReactJS', precio: 40},
    {id: 1, nombre: 'Camiseta Angular', precio: 50},
    {id: 2, nombre: 'Camiseta Vue', precio: 30},
    {id: 3, nombre: 'Camiseta JavaScript', precio: 20}
  ])
  // Carrito de compras
  const [carrito, agregarProducto] = useState([])

  return (
    <Fragment>
      <Header titulo="Desde el header"/>
      <h1>Listado de productos</h1>
      {
        productos.map(producto => (
          <Producto
            key={`${Math.floor(Math.random() * 31231)}`}
            producto={producto}
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
            />
        ))
      }
      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />
      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
