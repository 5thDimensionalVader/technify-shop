import { Cart, Shipping, Payment, CheckoutNav } from "..";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";

const Checkout = ({cart}) => {
  const location = useLocation();
  return (
    <Router>
      <div className="container">
        <CheckoutNav />

        {/* Checkout Content */}
        <div className="container my-4">
          <Switch>
            <Route exact path='/checkout'><Cart cart={cart}/></Route>
            <Route path='/shipping'><Shipping cart={cart}/></Route>
            <Route path='/payment'><Payment cart={cart}/></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Checkout;