import React from 'react';
import Filter from './Filter';
import Navbar from './Navbar';
import Footer from './Footer';
import './style.css';


function App() {
  return (
    // PUT COMPONENT IN DIV IF YOU WANT TO TEST IT/DISPLAY ON NPM START
    <div>
      {/* If you want to test your component, just call it here! */}
      <Navbar />
      <Filter />
      <Footer />
      {/* IE: <Navbar /> etc etc. */}
    </div>
  );
}

export default App;
