import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
 import Services from './components/Services';
// import Contact from './components/Contact';
import Introduction from './components/Introduction';
import ImageText from './components/ImageText'
// Ensure the image path is correct
import './App.css';  // Import the CSS file
import Contact from './components/Contact';
import Venue from './components/Venue';
function App() {
  return (
    <>
     <Navbar/>
     <ImageText/>
     <Introduction/>
     <Services/>
     <Venue></Venue>
     <Contact></Contact>

    </>
  );
}

export default App;
