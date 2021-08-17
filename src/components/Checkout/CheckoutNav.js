import { Link, useLocation } from "react-router-dom";

const CheckoutNav = () => {
  const location = useLocation();
  
  return (
    <div className="container">
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <Link className={location.pathname === '/checkout' ? "nav-link active" : "nav-link"}>1. Shopping Cart</Link>
        </li>
        <li className="nav-item">
          <Link className={location.pathname === '/shipping' ? "nav-link active" : "nav-link"}>2. Shipping Details</Link>
        </li>
        <li className="nav-item">
          <Link className={location.pathname === '/payment' ? "nav-link active" : "nav-link"}>3. Payment Details</Link>
        </li>
      </ul>
    </div>
  );
}

export default CheckoutNav;