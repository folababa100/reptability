import React, { Component } from 'react';
import Navbar from '../ui/Navbar';
import HomeBody from '../ui/HomeBody';
import Footer from '../ui/Footer';

export default class HomeDesign extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <HomeBody/>
        <Footer/>
      </div>
    )
  }
}
