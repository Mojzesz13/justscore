import React from 'react';

function Title({ titleText }) {
  const containerStyle = {
    width: '100vw',
    height: '5rem',
    marginTop: '4rem',
    fontSize: '1.5rem',
    textAlign: 'center',
  };

  const textStyle = {
    paddingTop: '1.5rem',
  };

  return (
    <div style={containerStyle} className='title-container'>
      <h2 style={textStyle}>{titleText}</h2>
    </div>
  );
}

export default Title;
