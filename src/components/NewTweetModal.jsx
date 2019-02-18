import React from 'react';

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

function handleNewTweetFormSubmission(event){
  event.preventDefault();
}

function NewTweetModal(){
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
export default NewTweetModal;
