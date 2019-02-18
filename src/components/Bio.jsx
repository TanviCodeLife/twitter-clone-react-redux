import React from 'react';
import BioProfile from './BioProfile';
import BioText from './BioText';

function Bio(props){
  const bioStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '30%'
  };
  return (
    <div style={bioStyles}>
      <BioProfile/>
      <BioText/>
    </div>
  );
}

export default Bio;
