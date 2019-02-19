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
      masterTweetList: [],
      query: ""
    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
    this.handleAddingAlikeToATweet = this.handleAddingAlikeToATweet.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddingNewTweetToList(newTweet){
    this.setState((state) => {
      return {masterTweetList: state.masterTweetList.concat([newTweet])};
    });
  }

  handleAddingAlikeToATweet(id){
    this.setState((state) => {
      masterTweetList: state.masterTweetList.map((tweet) => {
        if(tweet.id === id){
          tweet.likes++;
        }
        return tweet;
      })
    })
  }

  handleSearch(query, event) {
    event.preventDefault();
    this.setState({query: query});
  }

  filterTweets(array) {
    return array.filter((tweet) => {
      return tweet.tweet.includes(this.state.query);
    });
  }

  render() {
    return (
      <div>
        <div>
          <NavBarControl onNewTweetCreation={this.handleAddingNewTweetToList} onSearch={this.handleSearch} />}
        </div>
        <div style={bodyStyle}>
          <Bio/>
          <TweetList onLikeButtonClick={this.handleAddingAlikeToATweet} tweetList={this.filterTweets(this.state.masterTweetList)}/>
          <RecommendedList/>
        </div>
      </div>
    );
  }
}

export default App;
