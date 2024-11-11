import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: '#FFF' }}>
      <div className="container p-2">
        <Link className='Navbar-brand' to='/'>
        <img src='media/logo.svg' alt='Logo' style={{ width: '20%' }} />
        </Link>
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/SignUp">SignUp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/About">About</Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Support">Support</Link>
              </li>
            </ul>
          </form>
        </div>
      </nav>
  );
}

export default Navbar;