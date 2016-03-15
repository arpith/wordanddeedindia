import React from 'react';
 
class HeaderImg extends React.Component {
  render() {
    return (
      <div className="header-img">
        <img className="imgix-fluid" data-src="//assets.imgix.net/examples/octopus.jpg?fit=crop&crop=faces" />
      </div>
    );
  }
}

export default HeaderImg;
