import React from 'react';
import Recommended from './Recommended';

const recommendedList = [
  {
    name: 'Cardi B',
    username: 'iamcardib',
    profilePic: 'https://pbs.twimg.com/profile_images/1054790574086201345/hnnkdKJm_400x400.jpg'
  },
  {
    name: 'Ariana Grande',
    username: 'arianagrande',

    profilePic: 'https://pbs.twimg.com/profile_images/1090935294684102657/m1JrCsCP_400x400.jpg'
  },
  {
    name: 'Chrissy Teigen',
    username: 'chrissyteigen',
    profilePic: 'https://pbs.twimg.com/profile_images/680889019073454080/GMxn5fuf_400x400.jpg'
  }
];

function RecommendedList(props){
  const recommendedListStyles = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    height: '1000px',
    // width: '30%'
  };

  const largerBox ={
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: '10px',
    margin: '10px',
    height: '1000px',
    width: '30%',
    fontFamily: 'Arial'
  };
  return(
    <div style={largerBox}>
      <h2>Recommended</h2>
      <div style={recommendedListStyles}>
        {recommendedList.map((recommendation, index) =>
          <Recommended name = {recommendation.name}
            username = {recommendation.username}
            profilePic = {recommendation.profilePic}
            key = {index}/>
        )}
      </div>
    </div>
  );
}

export default RecommendedList;
