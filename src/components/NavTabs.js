import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="d-sm-flex">
      <div className="px-4">
        <li className="nav-item">
          <h4>
          <a
            href="#About me"
            onClick={() => handlePageChange('About me')}
            className={currentPage === 'About me' ? 'nav-link active' : 'nav-link'}
          >
          About me
          </a>
          </h4>
        </li>
      </div>
      <div className="px-4">
        <li className="nav-item">
          <h4>
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
          </h4>
        </li>
      </div>
      <div className="px-4">
        <li className="nav-item">
          <h4>
          <a
            href="#Contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
          Contact
          </a>
          </h4>
        </li>
      </div>
    </ul>
  );
}

export default NavTabs;
