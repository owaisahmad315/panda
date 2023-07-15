import React from 'react'
import Navbar from './components/navbar';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;
