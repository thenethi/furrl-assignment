import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import './App.css'

const App=()=>(
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  </Router>
)

export default App