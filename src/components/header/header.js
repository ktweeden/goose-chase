import React from 'react';
import './header.css';
import PropTypes from 'prop-types';

const Header = function({gameWon}) {
  return (
    <div className='header' >
      <h1 className='title'>Goose Chase</h1>
      <p className='game-state'>
        {gameWon ? 'You did it!' : 'You can do it!'}
      </p>
    </div>
  );
}

Header.propTypes = {
  gameWon: PropTypes.bool
};

export default Header;