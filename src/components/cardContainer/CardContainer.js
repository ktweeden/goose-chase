import React, {Component} from 'react';
import Card from '../card/Card';
import './CardContainer.css';
import alarmedGoose from '../../assets/alarmed-goose.jpg';
import attackingGoose from '../../assets/attacking-goose.jpeg';
import deliciousGoose from '../../assets/delicious-goose.jpg';
import honkingGoose from '../../assets/honking-goose.jpg';
import PropTypes from 'prop-types';


class CardContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cardGrid: [
        { value: 3, showing: false, matched: false },
        { value: 0, showing: false, matched: false },
        { value: 3, showing: false, matched: false },
        { value: 1, showing: false, matched: false },
        { value: 2, showing: false, matched: false },
        { value: 1, showing: false, matched: false },
        { value: 0, showing: false, matched: false },
        { value: 2, showing: false, matched: false }],
      currentlyClicked: [],
      geese: [alarmedGoose, attackingGoose, deliciousGoose, honkingGoose]
    }

    this.handleCardClick = this.handleCardClick.bind(this);
  }
  render() {
    const cardNodes = this.state.cardGrid.map((card, index) => {
      return (
        <Card 
          card={card} 
          key={index} 
          index={index} 
          image={this.state.geese[card.value]}
          handleClick={this.handleCardClick} />
      )
    });

    return (
      <div>
        <div className="container">
          {cardNodes}
        </div>
      </div>
    );
  }

  handleCardClick(index) {
    this.toggleCardShowing(index);
    const newClicked = this.state.currentlyClicked.concat(index);

    this.setState({ currentlyClicked: newClicked });
    this.checkForMatches(newClicked);
  }

  toggleCardShowing(index) {
    const newGrid = this.state.cardGrid;
    newGrid[index].showing = !this.state.cardGrid[index].showing;
    this.setState({ cardGrid: newGrid });
  }

  checkForMatches(currentlySelected) {
    if (currentlySelected.length === 2) {
      const cardA = this.state.cardGrid[currentlySelected[0]];
      const cardB = this.state.cardGrid[currentlySelected[1]];

      if (cardA.value === cardB.value) {
        this.matched(currentlySelected);
      }
      else {
        this.noMatch(currentlySelected);
      }
    }
  }

  matched(currentlySelected) {
    const newGrid = this.state.cardGrid;
    newGrid[currentlySelected[0]].matched = true;
    newGrid[currentlySelected[1]].matched = true;
    this.setState({cardGrid: newGrid});
    this.setState({currentlyClicked: []});
    this.checkForWin();
  }

  noMatch(currentlySelected) {
    setTimeout(() => {
      currentlySelected.forEach((cardIndex) => {
        this.toggleCardShowing(cardIndex)
      })
      this.setState({ currentlyClicked: [] })
    }, 1000)
  }

  checkForWin() {
    let gameWon = true;
    this.state.cardGrid.forEach((card) => {
      if (!card.matched) {
        gameWon = false;
      }
    })
    if(gameWon) {
      this.props.handleWin()
    }
  }
}

CardContainer.propTypes = {
  handleWin: PropTypes.func
}
export default CardContainer;