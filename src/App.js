import React, { Component } from 'react';
import './resources/styles.css';
import './components/featured/index'
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/VenueInfo';
import Highlights from './components/Highlights/index';
import Pricing from './components/Pricing/index';
import Location from './components/location/index';


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
        <Header/>
        <Featured/>
        <VenueInfo/>
        <Highlights/>
        <Pricing/>
        <Location/>
      </div>
    );
  }
}

export default App;
