import React from 'react';
import Bio from './Bio';
import NavBarControl from './NavBarControl';
import TweetList from './TweetList';
import RecommendedList from './RecommendedList';
import Moment from 'moment';
import { connect } from 'react-redux';

const bodyStyle = {
  display: 'flex',
  backgroundColor: '#E6ECF0',
};

class App extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      query: ''
    };
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
    const { dispatch } = this.props;
    Object.keys(this.props.masterTweetList).map(tweetId => {
      const tweet = this.props.masterTweetList[tweetId];
      const newFormattedTweetTime = tweet.timeTweet.fromNow(true);
      const action = {
        type: 'UPDATE_TIME',
        id: tweetId,
        formattedTweetTime: newFormattedTweetTime
      };
      dispatch(action)
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
          <NavBarControl onSearch={this.handleSearch} />
        </div>
        <div style={bodyStyle}>
          <Bio/>
          <TweetList  tweetList={this.props.masterTweetList}/>
          <RecommendedList/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterTweetList: state.masterTweetList

  }
}

export default connect(mapStateToProps)(App);
