import appStyles from './app.module.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About, Cart, Footer, Help, Home, Nav, Shop } from "./components";

const App = () => {
  return (
    <Router>
      <div className="container-fluid text-center">
        {/* Nav component here */}
        <Nav />
        {/* Switch on these different components */}
        <div className="container-fluid my-5">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/shop"><Shop /></Route>
            <Route path="/help"><Help /></Route>
            <Route path="/cart"><Cart /></Route>
          </Switch>
        </div>
        {/* Footer component here */}
      </div>
    </Router>
  );
}

export default App;