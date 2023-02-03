import React from 'react';
import logo from '../images/logoRow.png'
import carrito from '../images/cart.svg'
const Header = () => {
  return (
    <>
    <header className='header-top-strip py-2'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-2'>
              <img className='logo img-fluid' alt='logoTaal' src={logo}/>
            </div>
            <div className='col-8 d-inline-flex justify-content-between flex-row align-items-center'>
              <p className='d-inline-block '>A Medida</p>
              <p className='d-inline-block'>Galería</p>
              <p className='d-inline-block'>Regalos</p>
              <p className='d-inline-block'>Colecciones</p>
              <p className='d-inline-block'>Inspiración</p>
            </div>
            <div className='col-2'>
              <div className='row'>
                <img className='carrito img-fluid' src={carrito} alt='Carrito'/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header