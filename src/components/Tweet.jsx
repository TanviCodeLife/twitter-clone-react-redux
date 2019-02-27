import React from 'react';
import PropTypes from 'prop-types';
import LikeButton from './LikeButton';
import { connect } from 'react-redux';

const tweetBoxStyles = {
  border: 'none',
  backgroundColor: 'white',
  margin: '10px 10px 0px 10px',
  padding: '15px',
  fontFamily: 'Arial'
};

const imgStyle = {
  height: '40px',
  width: '40px',
  border: '3px solid lightgrey',
  borderRadius: '25rem',
};

const profilePicStyle = {
  height: '30px',
  width: '30px',
  margin: '5px 0px 0px 5px'
};

const tweetContentStyle = {
  margin: '-45px 5px 0px 60px',
  paddingBottom: '3px'
};

function Tweet(props) {

  const handleAddingLikeToTweet = () => {
    const { dispatch } = props;
    const newLikes = props.likes + 1;
    let action = {
      type: 'ADD_LIKE',
      id: props.id,
      likes: newLikes
    }
    dispatch(action);
  }

  return (
    <div style={tweetBoxStyles}>
      <div style={profilePicStyle}>
        <img style={imgStyle} src={`${props.profilePic}`}></img>
      </div>
      <div style={tweetContentStyle}>
        <p><strong>{props.name}</strong> @{props.username} ~ {props.formattedTweetTime} ago</p>
        <p>{props.tweet}</p>
      </div>
      <LikeButton
        onLikeButtonClick={handleAddingLikeToTweet}/>
      <p>{props.likes}</p>
    </div>
  );
}


Tweet.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  tweet: PropTypes.string,
  profilePic: PropTypes.string,
  likes: PropTypes.number,
  id: PropTypes.string,
  formattedTweetTime: PropTypes.string,
};


export default connect()(Tweet);
