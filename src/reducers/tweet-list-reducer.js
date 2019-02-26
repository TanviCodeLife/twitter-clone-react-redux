export default (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TWEET':
      const { tweet, id, name, username, profilePic, likes, timeTweet } = action;
      let newState = Object.assign({}, state, {
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
    default:
      return state;
    }
};
