import tweetListReducer from './../../src/reducers/tweet-list-reducer';

describe('tweetListReducer', () => {
  let action;
  const sampleTweetData = {
    tweet: 'hello',
    id: 0,
    name: 'Paige',
    username: '@paige',
    profilePic: 'https://avatars3.githubusercontent.com/u/26071756?s=460&v=4',
    likes: 0,
    timeTweet: 1500000000000,
  }

  test('should return default state if no action type is defined', () => {
    expect(tweetListReducer({}, { type: null })).toEqual({});
  });

  test('should add a new tweet to our masterTweetList', () => {
    const { tweet, id, name, username, profilePic, likes, timeTweet } = sampleTweetData;
    action = {
      type: 'ADD_TWEET',
      tweet: tweet,
      id: id,
      name: name,
      username: username,
      profilePic: profilePic,
      likes: likes,
      timeTweet: timeTweet
    };
    expect(tweetListReducer({}, action)).toEqual({
      [id] : {
        tweet: tweet,
        id: id,
        name: name,
        username: username,
        profilePic: profilePic,
        likes: likes,
        timeTweet: timeTweet
      }
    })
  })

  test('should add a like to a tweet', () => {
  const { tweet, id, name, username, profilePic, likes, timeTweet } = sampleTweetData;
  action = {
    type: 'ADD_LIKE',
    id: id,
    likes: 1
  }
    expect(tweetListReducer({ [id] : sampleTweetData }, action)).toEqual({
      [id] : {
        tweet: tweet,
        id: id,
        name: name,
        username: username,
        profilePic: profilePic,
        likes: 1,
        timeTweet: timeTweet
      }
    })
  })

});
