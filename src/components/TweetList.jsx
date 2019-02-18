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
  console.log(props)

  return(
    <div style={tweetListStyles}>
      {props.tweetList.map((tweet) =>
        <Tweet onLikeButtonClick={props.onLikeButtonClick(tweet)}
          tweet={tweet.tweet}
          name = {tweet.name}
          username = {tweet.username}
          profilePic = {tweet.profilePic}
          likes={tweet.likes}
          key={tweet.id}/>
      )}
    </div>
  );
}

TweetList.propTypes = {
  tweetList: PropTypes.array
};

export default TweetList;
