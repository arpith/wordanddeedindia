import React from 'react';
 
class Body extends React.Component {
  render() {
    const style = {
      float: 'left',
      clear: 'both'
    };
    
    const box = {
      width: '20%',
      float: 'left',
      color: 'white'
    };
    
    return (
      <div style={style}>
        <div style={box}>
          <h2>Who we are</h2>
          <p>We are a Christian organisation on a mission to educate children in rural India.</p>
        </div>
        <div style={box}>
          <h2>How you can help</h2>
          <p>You can transform the lives of children in poverty by sponsoring their education.</p>
        </div>
        <div style={box}>
          <h2>Education brings change</h2>
          <p>When a child gets access to education, it can change just about everything.</p>
        </div>
        <div style={box}>
          <h2>The impact you will make</h2>
          <p>A small contribution will bring big change -  for many children, this is their only opportunity to study.</p>
        </div>
      </div>
    );
  }
}

export default Body;
