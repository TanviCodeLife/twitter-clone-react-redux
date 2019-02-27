import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';
import { connect } from 'react-redux';

const modal = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)'
};

const modalMain = {
  position: 'fixed',
  background: 'white',
  width: '80%',
  height: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)'
};

function NewTweetModal(props){

  let _tweet = null;

  function handleNewTweetFormSubmission(event){
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'ADD_TWEET',
      tweet: _tweet.value,
      id: v4(),
      name: 'Paige Williams',
      username: 'p__williams',
      profilePic: 'https://avatars3.githubusercontent.com/u/26071756?s=460&v=4',
      likes: 0,
      timeTweet: new Moment(),
      formattedTweetTime: new Moment().fromNow(true)
    };
    dispatch(action);
    props.onHideModal();
  }

  return(
    <div style={modal}>
      <section style={modalMain}>
        <form onSubmit={handleNewTweetFormSubmission}>
          <input
            type='text'
            id='tweet'
            placeholder='hi!'
            ref={(input) => {_tweet = input;}}/>
          <button type='submit'>Tweet</button>
        </form>
      </section>
    </div>
  );
}

NewTweetModal.propTypes = {
  onHideModal: PropTypes.func
};
export default connect()(NewTweetModal);
