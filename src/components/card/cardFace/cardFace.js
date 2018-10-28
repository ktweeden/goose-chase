import React from 'react'
import './cardFace.css'

const CardFace = function (props) {
  return (
    <div className={props.matched ? 'face matched' : 'face'} >
      <img src={props.image}/>
    </div>
  )
}

export default CardFace;