import React from 'react';

const profileButtons = [
  {
    name: 'Tweets'
  },
  {
    name: 'Following'
  },
  {
    name: 'Followers'
  }
];

function BioProfile(props){
  const imgStyles = {
    width: '50px',
    height: '50px',
    border: '1px solid #696969',
    padding: '5px',
    marginTop: '10px',
    borderRadius: '25rem',
    backgroundColor: 'white'
  };

  const boxStyles = {
    backgroundColor: 'white',
    margin: '10px',
    border: 'none',
    fontFamily: 'Arial'
  };

  const buttonStyles ={
    color: '#696969',
    padding: '5px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    border: 'none',
    fontSize: '11px',
    marginLeft: '5px',
    marginRight: '5px',
    marginBottom: '15px'
  };

  const titleStyles ={
    marginLeft: '10px'
  };

  const picAndTitle = {
    marginLeft: '10px',
    display: 'flex',
    alignItems: 'baseline',
    zIndex: '1',
    marginTop: '-45px'
  };

  const centerContent = {
    display: 'flex',
    justifyContent: 'center'
  };

  const backgroundColor ={
    backgroundColor: 'tomato',
    width: '100%',
    height: '100px',
    margin: '0px'

  };

  return(
    <div style={boxStyles}>
      <div style={backgroundColor}>
      </div>
      <div style={picAndTitle}>
        <img style={imgStyles }src="https://avatars3.githubusercontent.com/u/26071756?s=460&v=4"></img>
        <h3 style={titleStyles}>Paige Williams</h3>
      </div>
      <div style={centerContent}>
        {profileButtons.map((button, index) =>
          <button key={index} style={buttonStyles}>{button.name}</button>
        )}
      </div>
    </div>
  );
}
export default BioProfile;
