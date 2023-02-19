import React from 'react';
import logo from '../images/logoRow.png'

const Header = () => {
  return (
    <>
    <header className='header-top-strip py-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-2 d-flex align-items-center justify-content-center'>
              <img className='logo img-fluid' alt='logoTaal' src={logo}/>
            </div>
            <div className='nav col-6 d-inline-flex flex-row align-items-center'>
              <p className='nav-item d-inline-block'>A Medida</p>
              <p className='nav-item d-inline-block'>Galería</p>
              <p className='nav-item d-inline-block'>Regalos</p>
              <p className='nav-item d-inline-block'>Colecciones</p>
              <p className='nav-item d-inline-block'>Inspiración</p>
            </div>
            <div className='col-4 d-flex align-items-center justify-content-end'>
              <input className='busqueda' type='text' placeholder='Buscar'></input>
              <div className='searchIcon row ms-2 me-1'>
                <i class="bi bi-search"></i>
              </div>
              <div className='cartIcon row ms-1 me-2'>
                <i class="bi bi-cart"></i>
              </div>
              <div className='userIcon row ms-1 me-2'>
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