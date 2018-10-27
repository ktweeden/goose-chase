import React from 'react'
import './cardFace.css'

const CardFace = function (props) {
  return (
    <div className={props.matched ? 'face matched' : 'face guess'} >
      <p>{props.value}</p>
    </div>
  )
}

export default CardFace;