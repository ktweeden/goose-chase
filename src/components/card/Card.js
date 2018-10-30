import React, {Component} from 'react';
import './Card.css';
import CardBack from './cardBack/cardBack';
import CardFace from './cardFace/cardFace';
import PropTypes from 'prop-types';


class Card extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
    const { card, image} = this.props
    return (
      <div className='card' onClick={this.handleClick}>
        {this.renderCard(card, image)}
      </div>
    )
  }

  renderCard(card, image) {
    if (card.showing || card.matched) {
      return <CardFace image={image} matched={card.matched}/>
    }
    else { 
      return  < CardBack /> 
    }
  }

  handleClick() {
    const {handleClick, index} = this.props
    handleClick(index);
  }
}

Card.propTypes = {
  card: PropTypes.object,
  index: PropTypes.number,
  image: PropTypes.string,
  handleClick: PropTypes.func
}

export default Card;