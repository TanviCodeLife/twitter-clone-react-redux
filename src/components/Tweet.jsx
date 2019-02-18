import React from 'react';
import PropTypes from 'prop-types';
import LikeButton from './LikeButton';

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
}

const profilePicStyle = {
  height: '30px',
  width: '30px',
  margin: '5px 0px 0px 5px'
};

const tweetContentStyle = {
  margin: '-45px 5px 0px 60px',
  paddingBottom: '3px'
};

class Tweet extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      updateLikeButton: false
    }
    this.handleLikeButton = this.handleLikeButton.bind(this);
  }

  handleLikeButton(){
    props.onLikeButtonClick();
  }

render(){

  return (
    <div style={tweetBoxStyles}>
      <div style={profilePicStyle}>
        <img style={imgStyle} src={`${this.props.profilePic}`}></img>
      </div>
      <div style={tweetContentStyle}>
        <p><strong>{this.props.name}</strong> @{this.props.username}</p>
        <p>{this.props.tweet}</p>
      </div>
      <LikeButton onLikeButtonClick={this.handleLikeButton}/>
      <p>{this.props.likes}</p>
    </div>
  );
}
}

Tweet.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  tweet: PropTypes.string,
  profilePic: PropTypes.string
};

export default Tweet;
