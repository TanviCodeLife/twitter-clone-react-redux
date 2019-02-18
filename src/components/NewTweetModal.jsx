import React from 'react';
import PropTypes from 'prop-types';

const modal = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)'
}

const modalMain = {
  position: 'fixed',
  background: 'white',
  width: '80%',
  height: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)'
}

const displayBlock = {
  display: 'block'
}

const displayNone = {
  display: 'none'
}

function NewTweetModal(props){
  let _tweet = null;

  function handleNewTweetFormSubmission(event){
    event.preventDefault();
    props.onNewTweetCreation({tweet: _tweet.value});
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
  )
}

NewTweetModal.propTypes = {
  onNewTweetCreation: PropTypes.func,
  onHideModal: PropTypes.func

}
export default NewTweetModal;
