import React, { useState } from 'react';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Portfolio from './components/pages/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

//Variable to hold the currently rendered page and default 'About'
const [currentPage, setCurrentPage] = useState('About');

// This method checks the value of `currentPage`and returns the appropriate component.
const renderPage = () => {
  if(currentPage === 'About') {
    return <About />;
  }
  if(currentPage === 'Portfolio') {
    return <Portfolio />;
  }
  if(currentPage === 'Resume') {
    return <Resume />;
  }
    return <Contact />    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
