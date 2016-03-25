import React from 'react';
import Header from './Header';
import HeaderImg from './HeaderImg';
import Headline from './Headline';
import Body from './Body';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderImg />
        <Header />
        <Headline />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
