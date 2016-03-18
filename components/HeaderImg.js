import React from 'react';
 
class HeaderImg extends React.Component {
  render() {
    const style = {
      width: '100%',
      height: '500px',
      position: 'absolute',
      zIndex: '-1000';
      textAlign: 'center',
      overflow: 'hidden'
    };
    
    const src = 'https://wordanddeedindia.imgix.net/images/child.jpg?fit=crop&crop=faces';

    return (
      <div style={style}>
        <img className="imgix-fluid" data-src={src} />
      </div>
    );
  }
}

export default HeaderImg;
