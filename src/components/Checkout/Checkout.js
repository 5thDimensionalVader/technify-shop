import { Cart, Shipping, Payment, CheckoutNav } from "..";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Checkout = () => {
  // set the title of the page
  document.title = "Technify - Checkout";
  return (
    <Router>
      <div className="container">
        <CheckoutNav />

        {/* Checkout Content */}
        <div className="container my-4">
          <Switch>
            <Route exact path='/checkout'><Cart /></Route>
            <Route path='/cart'><Cart /></Route>
            <Route path='/shipping'><Shipping /></Route>
            <Route path='/payment'><Payment /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Checkout;