import React, { Component } from 'react';
import './resources/styles.css';
import './components/featured/index'
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/VenueInfo';
import Highlights from './components/Highlights/index';
import Pricing from './components/Pricing/index';
import Location from './components/location/index';
import Footer from './components/header_footer/footer';
import { Element } from 'react-scroll';



class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>
        <Element name="venueinfo">
        <VenueInfo/>
        </Element>
        <Element name="highlights">
        <Highlights/>
        </Element>
        <Element name="pricing">
        <Pricing/>
        </Element>
        <Element name="location">
        <Location/>
        </Element>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
