import React from 'react'
import Navbar from './components/navbar';
import Section_1 from './components/section1';
import Section_2 from './components/section2';
import Section_3 from './components/section3';
import Footer from './components/footer';
 

function App() {
  return (
    <div className="App">
       <Navbar />
       <Section_1 />
       <Section_2 />
       <Section_3 />
       <Footer />
    </div>
  );
}

export default App;
