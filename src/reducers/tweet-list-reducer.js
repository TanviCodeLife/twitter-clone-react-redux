export default (state = {}, action) => {
  let newState;
  const { tweet, id, name, username, profilePic, likes, timeTweet } = action;
  switch(action.type) {
    case 'ADD_TWEET':
      newState = Object.assign({}, state, {
        [id] : {
          tweet: tweet,
          id: id,
          name: name,
          username: username,
          profilePic: profilePic,
          likes: likes,
          timeTweet: timeTweet
        }
      });
      return newState;
    case 'ADD_LIKE':
      const newTweet = Object.assign({}, state[id], {likes})
      newState = Object.assign({}, state, {
        [id] : newTweet
      });
      return newState
    default:
      return state;
    }
};
