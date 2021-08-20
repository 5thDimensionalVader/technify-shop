import { Link, useLocation } from "react-router-dom";

const CheckoutNav = () => {
  const location = useLocation();
  const navigate = pathName => location.pathname === pathName ? "nav-link active" : "nav-link";
  return (
    <div className="container">
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <Link className={navigate('/checkout')}>1. Shopping Cart</Link>
        </li>
        <li className="nav-item">
          <Link className={navigate('/shipping')}>2. Shipping Details</Link>
        </li>
        <li className="nav-item">
          <Link className={navigate('/payment')}>3. Payment Details</Link>
        </li>
      </ul>
    </div>
  );
}

export default CheckoutNav;