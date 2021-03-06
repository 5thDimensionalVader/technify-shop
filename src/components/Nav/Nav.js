import navStyles from './nav.module.css';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

const Nav = ({cartSize}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3">
      <div className="container-xxl">
        {/* Shop brand */}
        <div className="navbar-brand">
          <span className="text-primary fw-bold">Technify</span>
        </div>
        {/* Mobile view toggle button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
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
            <li className="nav-item ms-3 d-none d-md-inline">
              <Link className="nav-link btn btn-primary position-relative btn-sm text-white" to="/checkout">
                <span className="me-2"><MdShoppingCart color="white" /></span>
                <span>Your Cart</span>
                {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartSize}
                </span> */}
                <span className="badge bg-danger ms-1">{cartSize}</span>
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Nav;