import logo from './logo.svg';
import './App.css';
import {
  Route,
  Link
} from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './home'
function App() {
  return (
    <div>
        <Router>
     <Switch>
       <Route path='/' component={Home}/>
     </Switch>
     </Router> 
    </div>
  );
}

export default App;
