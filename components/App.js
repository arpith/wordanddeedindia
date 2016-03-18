import React from 'react';
import Header from './Header';
import HeaderImg from './HeaderImg';
import Headline from './Headline';

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderImg />
        <Header />
        <Headline />
      </div>
    );
  }
}

export default App;
