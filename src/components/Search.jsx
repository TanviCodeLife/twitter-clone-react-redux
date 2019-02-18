import React from 'react';

function Search(props){
  let _search = null;
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

  function handleSearchFormSubmission(event){
    event.preventDefault();
  }
  return(
    <div>
      <form onSubmit={handleSearchFormSubmission}>
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
