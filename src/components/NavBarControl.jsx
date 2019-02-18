import React from 'react';
import NavList from './NavList';
import Search from './Search';
import NewTweetButton from './NewTweetButton';
import NewTweetModal from './NewTweetModal';
import PropTypes from 'prop-types'

const navbarStyles = {
  display: 'flex',
  border: '1 solid black',
  backgroundColor: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100px'
};

const rightStyles = {
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '20px'
};

class NavBarControl extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      modalVisibleOnPage: false
    };
    this.handleNewTweet = this.handleNewTweet.bind(this);
  }

  handleNewTweet(){
    this.setState({modalVisibleOnPage: true})

  }

  render(){
    let currentlyVisibleContent = null;
    if(this.state.modalVisibleOnPage){
      currentlyVisibleContent = <NewTweetModal onNewTweetCreation={this.props.onNewTweetCreation} />;
    } else {
      currentlyVisibleContent = <NewTweetButton onNewTweetConfirmation={this.handleNewTweet} />
    }
    return (
      <div style={navbarStyles}>
        <NavList/>
        <div style={rightStyles}>
          <Search/>
          {currentlyVisibleContent}
        </div>
      </div>
    );
  }
}

NavBarControl.propTypes = {
  onNewTweetCreation: PropTypes.func
}

export default NavBarControl;
