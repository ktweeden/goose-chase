import React from 'react';
import './header.css';

const Header = function(props) {
  return (
    <div className='header' >
      <h1 className='title'>Goose Chase</h1>
      <p className='game-state'>
        {props.gameWon ? 'You did it!' : 'You can do it!'}
      </p>
    </div>
  );
}

export default Header;