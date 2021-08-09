import { Link } from "react-router-dom";

const CheckoutNav = () => {
  return (
    <div className="container">
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to='/cart'>1. Shopping Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/shipping'>2. Shipping Details</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/payment'>3. Payment Details</Link>
          </li> 
        </ul>
    </div>
  );
}

export default CheckoutNav;