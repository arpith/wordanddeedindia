import React from 'react';
 
class HeaderImg extends React.Component {
  render() {
    const style = {
      width: '98%',
      height: '500px',
      clear: 'both',
      margin: '0 1% .5em',
      text-align: 'center',
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
