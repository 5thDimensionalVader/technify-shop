import { Cart, Shipping, Payment, CheckoutNav } from "..";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";

const Checkout = ({ cart, setCart }) => {
  const location = useLocation();
  return (
    <Router>
      <div className="container">
        <CheckoutNav />

        {/* Checkout Content */}
        <div className="container my-4">
          <Switch>
            <Route exact path='/checkout'><Cart cart={cart} setCart={setCart} /></Route>
            <Route path='/shipping'><Shipping cart={cart} setCart={setCart} /></Route>
            <Route path='/payment'><Payment cart={cart} setCart={setCart} /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Checkout;