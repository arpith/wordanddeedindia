import React from 'react';
 
class Footer extends React.Component {
  render() {
    const style = {
      backgroundColor: '#E55B6B',
      float: 'left',
      clear: 'both',
    };
    
    const box = {
      width: '20%',
      float: 'left',
      color: 'white'
    };
    
    return (
      <div style={style}>
        <div style={box}>
          <h2>What we do</h2>
          <p>From providing transport across villages, to feeding the children at lunch, to clothing them, we look at education from the bigger picture</p>
        </div>
        <div style={box}>
          <h2>Where we work</h2>
          <p>We run schools in Hayathnagar and Begumpet. Click here to view the map.</p>
        </div>
        <div style={box}>
          <h2>Our facilities</h2>
          <p>Hostels, spacious class rooms, well equipped science and computer labs, sports department, audio visual room - we give each child our best.</p>
        </div>
        <div style={box}>
          <h2>Testimonials</h2>
          <p>Read how Sudha and Rani went from poverty to successful careers.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
