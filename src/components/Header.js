import React from 'react';
import logo from '../images/logoRow.png'
import carrito from '../images/cart.svg'
import lupa from '../images/search-glasses.svg'
const Header = () => {
  return (
    <>
    <header className='header-top-strip py-2'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-2 d-flex align-items-center justify-content-center'>
              <img className='logo img-fluid' alt='logoTaal' src={logo}/>
            </div>
            <div className='col-8 d-inline-flex justify-content-around flex-row align-items-center'>
              <p className='d-inline-block '>A Medida</p>
              <p className='d-inline-block'>Galería</p>
              <p className='d-inline-block'>Regalos</p>
              <p className='d-inline-block'>Colecciones</p>
              <p className='d-inline-block'>Inspiración</p>
            </div>
            <div className='col-2 d-flex flex-row align-items-center'>
              <div className='row ms-2 me-1'>
                <img className='lupa img-fluid' src={lupa} alt='search'/>
              </div>
              <div className='row ms-1 me-2'>
                <img className='carrito img-fluid' src={carrito} alt='Carrito'/>
              </div>
              <div className='row ms-1 me-2'>
                <i className='user bi bi-person-circle'/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header