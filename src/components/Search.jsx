import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
  console.log(props);
  let _search = null

  const handleSearchQuery = (query, event) => {
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'SEARCH_QUERY',
      query: query
    };
    dispatch(action);
  }

  return(
    <div>
      <form onSubmit={(event) => handleSearchQuery(_search.value, event)}>
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

export default connect()(Search);
