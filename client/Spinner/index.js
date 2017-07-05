import React from 'react';

const styles = {
  textAlign: 'center'
}

const Spinner = props => {
  return (
    <div className='spinner'>
      <img src='images/spinning-circles.svg' />
    </div>
  )
}

export default Spinner;
