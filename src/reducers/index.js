import tweetListReducer from './tweet-list-reducer';
import queryReducer from './query-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  query: queryReducer,
  masterTweetList: tweetListReducer
});

export default rootReducer;
