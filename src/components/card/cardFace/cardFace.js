import React from 'react'
import './cardFace.css'

const CardFace = function (props) {
  return (
    <div className='card-face'>
      <p>{props.value}</p>
    </div>
  )
}

export default CardFace;