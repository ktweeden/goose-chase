import React, {Component} from 'react';
import Card from '../card/Card';
import './CardContainer.css'

class CardContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cardGrid: [
        { value: 3, showing: false, matched: false },
        { value: 1, showing: false, matched: false },
        { value: 3, showing: false, matched: false },
        { value: 1, showing: false, matched: false },
        { value: 4, showing: false, matched: false },
        { value: 4, showing: false, matched: false }],
      currentlyClicked: [],
      gameWon: false
    }

    this.handleCardClick = this.handleCardClick.bind(this);
  }
  render() {
    const cardNodes = this.state.cardGrid.map((card, index) => {
      return <Card card={card} key={index} index={index} handleClick={this.handleCardClick} />
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
export default CardContainer;