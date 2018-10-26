import React from 'react';
import './Card.css';
import CardBack from './cardBack/cardBack';
import CardFace from './cardFace/cardFace';

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      card: this.props.card,
      faceShowing: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
    return (
      <div className='card' onClick={this.handleClick}>
        { this.state.faceShowing ? < CardFace value={this.state.card}/> : < CardBack />}
      </div>
    )
  }

  handleClick() {
    this.props.handleClick(this.props.index);
    this.setState({faceShowing: true});
  }
}

export default Card;