import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Footer from "./components/footer";
import Tracking from "./components/tracking";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/tracking">
            <Tracking />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
