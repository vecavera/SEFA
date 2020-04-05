import React from 'react';
import './../css/Homepage.css'
import Header from './Header';
import Footer from './Footer';
import Main from './Main'

class Homepage extends React.Component {

  render() {
    return (
      <div className="App">
          <Header />
          <Main />
          <Footer />
      </div>
    );
  }

}

export default Homepage;