import React from 'react';
import Tweet from './Tweet';
import PropTypes from 'prop-types';

function TweetList(props){
  const tweetListStyles = {
    display: 'flex',
    backgroundColor: '#E6ECF0',
    width: '40%',
    flexDirection: 'column'
  };

  return(
    <div style={tweetListStyles}>
      {props.tweetList.map((tweet, index) =>
        <Tweet tweet={tweet.tweet}
        key={index}/>
      )}
    </div>
  );
}

TweetList.propTypes = {
  tweetList: PropTypes.array
};

export default TweetList;
