import React from 'react'
import cuadro from '../images/cuadro-producto.png'

function Producto() {
  return (
    <div>
        <div className='conatiner-xxl d-flex'>
            <div className='col-7 d-flex'> 
                <div className='image-container'>
                    <div className='margin-box'></div>
                    <div className='product-imagen-box d-flex flex-row justify-content-center align-items-end'>
                        <div className='review-box d-flex flex-column justify-content-between align-items-center'>
                            <div className='' style={{backgroundColor:'black', height:'50px',width:'50px'}}>
                                {/*<img/>*/}
                            </div>
                            <div className='' style={{backgroundColor:'black', height:'50px',width:'50px'}}>
                                {/*<img/>*/}
                            </div>
                            <div className='' style={{backgroundColor:'black', height:'50px',width:'50px'}}>
                                {/*<img/>*/}
                            </div>
                        </div>
                        <div className='d-flex flex-column'>
                            <div className='imagen-box'>
                                <img className='producto-imagen' src={cuadro} alt='...'/>
                            </div>
                        </div>
                    </div>
                    <div className='blank-container d-flex justify-content-center'>
                        <div className='blank-box'></div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='col-4'>
                <div className='d-flex justify-content-center align-items-center' style={{backgroundColor:'antiquewhite',height:'800px',width:'100%'}}>
                    <div className='product-container d-flex flex-column justify-content-start' style={{width:'80%'}}>
                        <div className='back-container d-flex align-items-center'>
                            <i class="bi bi-arrow-left-short"/>
                            <p className='text-back'>Volver</p>
                        </div>
                        <div className='text-product-container'>
                            <p className='text-title-product'>Relieve Primaveral</p>
                            <p className='text-author-product'>Hettie Richards</p>
                        </div>
                        <div className='quality-contanier'>
                            <p className='text-quality one'>Caracteristica uno</p>
                            <p className='text-quality two'>Caracteristica dos</p>
                            <p className='text-quality three'>Caracteristica tres</p>
                        </div>
                        <div className='desc-container'>
                            <p className='text-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className='price-container d-flex justify-content-end'>
                            <p className='text-price'>$599.90</p>
                        </div>
                        <div className='shipping-container'>
                            <p className='text-shipping'>Envío estimado en 3-5 días</p>
                        </div>
                        <div class="buttom-add-cart d-grid gap-2">
                            <button class="btn btn-primary" type="button">Agregar al Carro</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-1'></div>
        </div>
    </div>
    
  )
}

export default Producto