// import dependencies; React, Components
import React, { useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  
  //Variable to hold the currently rendered page and default 'About'
  const [currentPage, setCurrentPage] = useState("About");

  // This method checks the value of `currentPage`and returns the appropriate component.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header handlePageChange={handlePageChange} />
      <main className="pageContainer">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
