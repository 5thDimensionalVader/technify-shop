import appStyles from './app.module.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About, Checkout, Footer, Help, Home, Nav, Product, Shop } from "./components";
import { useState } from 'react';

const App = () => {
  // create a state for an empty array that will be our cart
  const [cart, setCart] = useState([]);
  console.log(cart);

  return (
    <Router>
      <div className="container-fluid text-center">
        {/* Nav component here */}
        <Nav cartSize={cart.length}/>
        {/* Switch on these different components */}
        <div className="container-fluid my-5">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/shop"><Shop /></Route>
            <Route path="/help"><Help /></Route>
            <Route path="/checkout"><Checkout cart={cart}/></Route>
            <Route path="/product"><Product setCart={setCart} cart={cart}/></Route>
          </Switch>
        </div>
        {/* Footer component here */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;