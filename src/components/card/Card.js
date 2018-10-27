import React, {Component} from 'react';
import './Card.css';
import CardBack from './cardBack/cardBack';
import CardFace from './cardFace/cardFace';

class Card extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
    return (
      <div className='card' onClick={this.handleClick}>
        {this.renderCard()}
      </div>
    )
  }

  renderCard() {
    if (this.props.card.showing || this.props.card.matched) {
      return <CardFace value={this.props.card.value} matched={this.props.card.matched}/>
    }
    else { 
      return  < CardBack /> 
    }
  }

  handleClick() {
    this.props.handleClick(this.props.index);
  }
}

export default Card;