import React, { Component } from 'react';
import CardContainer from '../cardContainer/CardContainer';
import Header from '../header/header';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      gameWon: false
    }

    this.handleWin = this.handleWin.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header gameWon={this.state.gameWon}/>
        <CardContainer handleWin={this.handleWin}/>
      </div>
    );
  }

  handleWin() {
    this.setState({gameWon: true});
  }
}

export default App;
