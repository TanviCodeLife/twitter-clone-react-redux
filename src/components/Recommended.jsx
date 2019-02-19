import React from 'react';
import PropTypes from 'prop-types';

function Recommended(props){
  const recommendedBoxStyles = {
    border: 'none',
    backgroundColor: 'white',
    margin: '10px 10px 0px 10px',
    padding: '5px',
    fontFamily: 'Arial',
    borderBottom: '2px solid #E6ECF0'
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
    // paddingBottom: '3px'
  };

  const followButton ={
    margin: '-200px 0px 5px 60px',
    width: '75px',
    border: '1px solid tomato',
    color: '#696969',
    padding: '5px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '12px',
    backgroundColor: 'white',
    borderRadius: '25rem'
  };

  return(
    <div>
      <div style={recommendedBoxStyles}>
        <div style={profilePicStyle}>
          <img style={imgStyle} src={`${props.profilePic}`}></img>
        </div>
        <div style={tweetContentStyle}>
          <p><strong>{props.name}</strong> @{props.username}</p>
        </div>
        <div>
          <button style={followButton}>Follow</button>
        </div>
      </div>
    </div>
  );
}

Recommended.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  profilePic: PropTypes.string
};

export default Recommended;
