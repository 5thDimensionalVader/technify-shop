import { Cart, Shipping, Payment, CheckoutNav } from "..";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Checkout = () => {
  return (
    <Router>
      <div className="container">
        <CheckoutNav />

        {/* Checkout Content */}
        <Switch>
          <Route exact path='/checkout'><Cart /></Route>
          <Route path='/cart'><Cart /></Route>
          <Route path='/shipping'><Shipping /></Route>
          <Route path='/payment'><Payment /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Checkout;