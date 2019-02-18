import React from 'react';

function Search(props){
  const searchStyles = {
    border: '2px solid #4682B4',
    color: '#696969',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    backgroundColor: 'white',
    borderRadius: '25rem',
    marginRight: '5px'
  };

  function handleNewTweetFormSubmission(event){
    event.preventDefault();
  }
  return(
    <div>
      <form onSubmit={handleNewTweetFormSubmission}>
      <input
        type='text'
        id='search'
        style={searchStyles}
        placeholder='Search'
        ref={(input) => {_search = input;}}/>
      </form>
  </div>
  );
}

export default Search;
