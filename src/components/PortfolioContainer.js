import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import logogithub from './img/25231.png';
import logolinked from './img/Linkedin-Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const imgStyle={width: '60px'}
const gitStyle={width: '40px'}
const body={background:' rgb(56, 17, 17)'}
const letterColor={color: 'white'}

// const imageBackground={height:'100vh'}




export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About me');
  
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About me') {

     
      return <About/>;
    }
    if (currentPage === 'Portfolio') {
      
      return <Portfolio/>;
    }
    
    return <Contact/>;
  };
  
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container-fluid backImg">
      <div className="row align-items-center py-4" style={body}>
          <div className="col">
            <h1 style={letterColor}>
                JAVIER MURIEL PALACIOS
            </h1>
          </div>
          
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div className='contentBackground'>
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
      <div className="row justify-content-center mb-8 py-4 contentBackground">
          <div className="col-7 text-center py-4">
           <a href='https://github.com/jav8319'><img src={logogithub} alt="githu blogo" style={gitStyle}></img></a>
           <a href="https://www.linkedin.com/in/javier-muriel-66a34b190/"><img src={logolinked} alt="linked logo" style={imgStyle}></img></a>
          </div>
        </div>

  </div>
  
  );
}
