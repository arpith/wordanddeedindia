import React from 'react';
import Header from './Header';
import HeaderImg from './HeaderImg';
 
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HeaderImg />
        <Headline />
        <Need />
        <Donation />
        <You />
        <Impact />
      </div>
    );
  }
}

export default App;
