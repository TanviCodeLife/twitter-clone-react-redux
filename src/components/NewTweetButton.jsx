import React from 'react';
import PropTypes from 'prop-types';

const buttonStyles ={
  border: '2px solid #4682B4',
  color: '#696969',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  backgroundColor: 'white',
  borderRadius: '25rem'
};

function NewTweetButton(props){

  return(
    <div>
      <button onClick={props.onNewTweetConfirmation} style={buttonStyles}>New Tweet</button>
    </div>
  );
}

NewTweetButton.propTypes ={
  onNewTweetConfirmation: PropTypes.func
}

export default NewTweetButton;
