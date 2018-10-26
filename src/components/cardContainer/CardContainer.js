import React from 'react';
import Card from '../card/Card';
import './CardContainer.css'

class CardContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cardGrid: [3,1,2,1,3,2, 3, 4, 5],
      currentlyClicked: []
    }

    this.handleCardClick = this.handleCardClick.bind(this);
  }
  render() {
    const cardNodes = this.state.cardGrid.map((card, index) => {
      return <Card card={card} key={index} index={index} handleClick={this.handleCardClick} />
    });

    return (
      <div className="container">
        {cardNodes}
      </div>
    );
  }

  handleCardClick(index) {
    console.log(this.state.cardGrid[index]);
    const newClicked = this.state.currentlyClicked.concat(index);
    this.setState({currentlyClicked: newClicked})
  }
}
export default CardContainer;