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
    super(props)
    this.state = {
      masterTweetList: []
    }
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
  }
  handleAddingNewTweetToList(newTweet){
    let newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.push(newTweet);
    this.setState({masterTweetList: newMasterTweetList});
  }
  render() {
    return (
      <div>
        <div>
         <NavBarControl onNewTweetCreation={this.handleAddingNewTweetToList} />}
        </div>
        <div style={bodyStyle}>
          <Bio/>
          <TweetList tweetList={this.state.masterTweetList}/>
          <RecommendedList/>
        </div>
      </div>
    );
  }
}

export default App;
