import React from 'react';
 
class HeaderImg extends React.Component {
  render() {
    return (
      <div className="header-img">
        <img className="imgix-fluid" data-src="https://wordanddeedindia.imgix.net/images/child.jpg?fit=crop&crop=faces" />
      </div>
    );
  }
}

export default HeaderImg;
