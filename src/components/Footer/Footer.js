import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container py-3">
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          {/* Navbar Links */}
          <div className="navbar-collapse justify-content-center align-center" id="main-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/help">Help</Link>
              </li>
            </ul>
          </div>
          {/* Brand */}
        </div>
      </nav>
      <div className="container text-center align-center">
        <span className="text-primary fw-bold">Technify</span>
      </div>
    </div>
  );
}

export default Footer;