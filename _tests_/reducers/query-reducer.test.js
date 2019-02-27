import queryReducer from './../../src/reducers/query-reducer';

describe("queryReducer", () => {

  test('should return default state if no action type is defined', () => {
    expect(queryReducer({}, { type: null })).toEqual({});
  });

  test('should record the search query entered by the user', () => {
    expect(queryReducer({} , { type: 'SEARCH_QUERY', query: 'hello' })).toEqual('hello');
  })
})
