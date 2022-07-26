import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About me');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About me') {
      return <About/>;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <div class="container">
            <div class="row">
                <div class="col">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                          <a class="nav-link active" href="https://github.com/jav8319">github</a>
                        </li>
                      </ul>
                </div>
            </div>
        </div>
    </div>
  );
}
