import React from 'react';

const trendsList = [
  {
    title: 'Grammys',
    body: 'K-pop group band sensation BTS called their apperance at a red carpet event for the 61st Grammy Awards, the first ever for Korean Artists'
  },
  {
    title: '#MondayMotivation',
    body: 'PDX Women in Tech is tweeting about this'
  },
  {
    title: '#WomenInScience',
    body: 'Female scientists share details of their work on Women in Science Day'
  }
];

function BioText(props){
  const boxStyles = {
    backgroundColor: 'white',
    margin: '10px',
    border: 'none',
    fontFamily: 'Arial',
    padding: '0px 10px 0px 10px'
  };

  const titleStyles = {
    color: 'tomato',
    marginBottom: '-10px'
  };

  const trendsStyles = {

  };

  return(
    <div style={boxStyles}>
      <h3>Portland Trends </h3>
      {trendsList.map((trend, index) =>
        <div style={trendsStyles}>
          <h4 style={titleStyles}
            key={index}>
            {trend.title}</h4>
          <p>{trend.body}</p>
        </div>
      )}
    </div>
  );
}

export default BioText;
