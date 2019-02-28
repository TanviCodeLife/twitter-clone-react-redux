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

  filterTweets(tweets) {
    return Object.keys(tweets).reduce((all, tweetId) => {
      const tweet = tweets[tweetId];
       if(tweet.tweet.includes(this.props.query)) {
         all[tweetId] = tweet;
       }
       return all;
    }, {});
  }

  render() {
    return (
      <div>
        <div>
          <NavBarControl/>
        </div>
        <div style={bodyStyle}>
          <Bio/>
          <TweetList tweetList={this.filterTweets(this.props.masterTweetList)}/>
          <RecommendedList/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterTweetList: state.masterTweetList,
    query: state.query
  }
}

export default connect(mapStateToProps)(App);
