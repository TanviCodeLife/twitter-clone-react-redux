import React from 'react';
import Tweet from './Tweet';
import PropTypes from 'prop-types';

const tweetListStyles = {
  display: 'flex',
  backgroundColor: '#E6ECF0',
  width: '40%',
  flexDirection: 'column'
};

function TweetList(props){
  return(
    <div style={tweetListStyles}>
      {Object.keys(props.tweetList). map(function(tweetId) {
        const tweet = props.tweetList[tweetId];
        return <Tweet
        tweet={tweet.tweet}
        name = {tweet.name}
        username = {tweet.username}
        profilePic = {tweet.profilePic}
        likes={tweet.likes}
        id={tweet.id}
        formattedTweetTime={tweet.formattedTweetTime}
        key={tweet.id}/>
      })}

    </div>
  );
}

TweetList.propTypes = {
  tweetList: PropTypes.object,
};

export default TweetList;
