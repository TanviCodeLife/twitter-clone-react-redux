import React from 'react';
import PropTypes from 'prop-types';


function Tweet (props){
  const tweetBoxStyles = {
    border: 'none',
    backgroundColor: 'white',
    margin: '10px 10px 0px 10px',
    padding: '15px',
    fontFamily: 'Arial'

  };



  return (
    <div>
      <div style={tweetBoxStyles}>
        <p>{props.tweet}</p>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  body: PropTypes.string,
  profilePic: PropTypes.string
};

export default Tweet;
