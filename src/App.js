
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.js';
import Profiles from './Profiles.js'

function App() {
  return (
    
    <Router>
  <switch>
        <Route exact path="/browse">
            <Home />
          </Route>
          <Route exact path="/">
          <Profiles />
          
  </Route>
   
     </switch>
    </Router>
   
  );
}

export default App;
