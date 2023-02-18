import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Service from './Components/Service';
import Aboutus from './Components/Aboutus';
import Portfolio from './Components/Portfolio';
import Counter from './Components/Counter';
import Testimonial from './Components/Testimonial';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Service/>
    <Aboutus/>
    <Portfolio/>
    <Counter/>
    <Testimonial/>
    <Contactus/>
    <Footer/>
    </>
  );
}

export default App;
