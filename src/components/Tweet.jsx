import React from 'react';
import PropTypes from 'prop-types';


function Tweet (props){
  const tweetBoxStyles = {
    border: 'none',
    backgroundColor: 'white',
    margin: '10px 10px 0px 10px',
    padding: '5px',
    fontFamily: 'Arial'
  };

  const tweetContentStyle = {
    margin: '-45px 5px 0px 60px',
    paddingBottom: '3px'
  }

  return (
    <div>
      <div style={tweetBoxStyles}>
        <div style={tweetContentStyle}>
        <p>{props.tweet}</p>
        </div>
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
