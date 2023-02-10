import React from 'react'
//import banner from '../images/banner-muebleV2.png'
import mueble from '../images/mueble.png'
import cuadro from '../images/cuadro-banner1.png'
import Products from '../components/Products'


function Home() {
  return (
    <>
      <div className='container-xll d-flex flex-column justify-content-end  big-banner'>
      <div className='d-inline-flex f-column justify-content-between'>
        <div className='d-flex align-items-center'>
        <i class="arrow bi bi-arrow-left"></i>
        </div>
        <div className='display-banner'>
          <img className='cuadro img-fluid' src={cuadro} alt='cuadro paisaje'/>
        </div>
        <div className='d-flex align-items-center'>
          <i class="arrow bi bi-arrow-right"></i>
        </div>
      </div>
   
        <div className='mueble align-self-center'>
          <img className='mueble-banner img-fluid' src={mueble} alt='mueblecito'/>
        </div>
      </div>
      <div className='container-xll'>
        <div className='d-flex flex-row justify-content-between'>
          <Products img='gallery' pNombre='CUADRO DOBLE MARCO' pDesc='Una triste descripcion' pCost='$19.90'/>
          <Products img='gallery' pNombre='HOLA' pDesc='Una triste descripcion' pCost='$19.90'/>
          <Products img='gallery' pNombre='CUADRO DOBLE MARCO' pDesc='Una triste descripcion' pCost='$19.90'/>
          <Products img='gallery' pNombre='CUADRO DOBLE MARCO' pDesc='Una triste descripcion' pCost='$19.90'/>
          <Products img='gallery' pNombre='CUADRO DOBLE MARCO' pDesc='Una triste descripcion' pCost='$19.90'/>
          <Products img='gallery' pNombre='CUADRO DOBLE MARCO' pDesc='Una triste descripcion' pCost='$19.90'/>
          <Products img='gallery' pNombre='CUADRO DOBLE MARCO' pDesc='Una triste descripcion' pCost='$19.90'/>
          
        </div>
      </div>
    </>
  )
}

export default Home