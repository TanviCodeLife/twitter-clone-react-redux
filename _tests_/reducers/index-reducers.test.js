import rootReducer from './../../src/reducers/index';
import queryReducer from './../../src/reducers/query-reducer';
import tweetListReducer from './../../src/reducers/tweet-list-reducer'

import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test('should return default state if not action is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      query: {},
      masterTweetList: {}
    });
  });

  test('should contain queryReducer logic', () => {
    expect(store.getState().query).toEqual(queryReducer(undefined, { type: null }));
  });

  test('should contain tweetListReducer logic', () => {
    expect(store.getState().masterTweetList).toEqual(tweetListReducer(undefined, { type: null }));
  });

});
