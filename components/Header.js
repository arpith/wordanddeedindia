import React from 'react';
 
class Header extends React.Component {
  render() {
    const style = {
      width: '20%'
    };
    
    return (
      <div>
        <div style={style}>Word & Deed India</div>
        <div style={style}>Donate</div>
        <div style={style}>Why Education?</div>
        <div style={style}>Our Projects</div>
        <div style={style}>About Us</div>
      </div>
    );
  }
}

export default Header;
