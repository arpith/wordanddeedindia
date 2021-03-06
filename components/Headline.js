import React from 'react';
 
class Headline extends React.Component {
  render() {
    const style = {
      width: '40%',
      marginTop: '150px',
      minHeight: '150px',
      clear: 'both',
      float: 'right',
      color: 'white'
    };
    
    return (
      <div style={style}>
        <h1>Educate a child</h1>
        <div>The gift of education can break the cycle of poverty and prevent child labour.</div>
      </div>
    );
  }
}

export default Headline;
