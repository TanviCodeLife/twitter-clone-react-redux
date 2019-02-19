import React from 'react';
import Bio from './Bio';
import NavBarControl from './NavBarControl';
import TweetList from './TweetList';
import RecommendedList from './RecommendedList';


const bodyStyle = {
  display: 'flex',
  backgroundColor: '#E6ECF0',
};

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterTweetList: []
    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
    this.handleAddingAlikeToATweet = this.handleAddingAlikeToATweet.bind(this);
  }

  handleAddingNewTweetToList(newTweet){
    this.setState((state) => {
      return {masterTweetList: state.masterTweetList.concat([newTweet])};
    });
  }

  handleAddingAlikeToATweet(id){
    this.setState({masterTweetList: this.state.masterTweetList.map((tweet) => {
      if(tweet.id === id) {
        tweet.likes++;
      }
      return tweet;
    })});
  }

  render() {
    return (
      <div>
        <div>
          <NavBarControl onNewTweetCreation={this.handleAddingNewTweetToList} />}
        </div>
        <div style={bodyStyle}>
          <Bio/>
          <TweetList onLikeButtonClick={this.handleAddingAlikeToATweet} tweetList={this.state.masterTweetList}/>
          <RecommendedList/>
        </div>
      </div>
    );
  }
}

export default App;
