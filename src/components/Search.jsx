import React from 'react';
import PropTypes from 'prop-types';

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

function Search(props){
  let _search = null;

  // function handleSearchFormSubmission(event){
  //   event.preventDefault();
  //
  //   console.log('search', _search.value);
  // }

  return(
    <div>
      <form onSubmit={(e) => props.onSearch(_search.value, e)}>
        <input
          type='text'
          style={searchStyles}
          placeholder='Search'
          ref={(input) => {_search = input;}}/>
      </form>
    </div>
  );
}

Search.propTypes ={
  onSearch: PropTypes.func
};

export default Search;
