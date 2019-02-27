export default (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_QUERY':
      return action.query;
    default:
      return state;
  }
};
