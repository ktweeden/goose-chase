import React from 'react'
import './cardFace.css'
import PropTypes from 'prop-types';


const CardFace = function ({matched, image}) {
  return (
    <div className={matched ? 'face matched' : 'face'} >
      <img alt='A goose' src={image}/>
    </div>
  )
}

CardFace.propTypes = {
  matched: PropTypes.bool,
  image: PropTypes.string
}

export default CardFace;