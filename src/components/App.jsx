import React from 'react';
import Bio from './Bio';
import NavBarControl from './NavBarControl';
import TweetList from './TweetList';
import RecommendedList from './RecommendedList';
import Moment from 'moment';

const bodyStyle = {
  display: 'flex',
  backgroundColor: '#E6ECF0',
};

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterTweetList: [],
      query: ''
    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
    this.handleAddingAlikeToATweet = this.handleAddingAlikeToATweet.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(){
    this.tweetTimeUpdateTime = setInterval(() =>
      this.updateTweetTime(),
    6000
    );
  }

  componentWillUnmount() {
    clearInterval(this.tweetTimeUpdateTime);
  }

  updateTweetTime(){
    let newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.forEach((tweet) =>
      tweet.formattedTweetTime = (tweet.timeTweet).fromNow(true)
    );
    this.setState({masterTweetList: newMasterTweetList});
  }

  handleAddingNewTweetToList(newTweet){
    newTweet.formattedTweetTime = (newTweet.timeTweet).fromNow(true);
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
      });
    });
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
          <NavBarControl onNewTweetCreation={this.handleAddingNewTweetToList} onSearch={this.handleSearch} />
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
