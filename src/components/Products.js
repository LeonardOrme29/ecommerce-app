import React from 'react'
import '../estilos/productos.css'

function Products (props){
  return (
    <div className='pContainer d-flex flex-column justify-content-center'>
        <div className='pContainerImg d-flex justify-content-center'>
        <img className='' src={require(`../images/${props.img}.png`)} alt='product-item'/>
        </div>
        <div className='pInfo d-flex flex-column'>
          <p className='pNombre'>{props.pNombre}</p>
          <p className='pDesc'>{props.pDesc}</p>
          <p className='pCost'>{props.pCost}</p>
        </div>
    </div>
  )
}

export default Products