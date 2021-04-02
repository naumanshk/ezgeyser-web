import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from './Components/Auth/login'
import Register from './Components/Auth/register'
import Home from './Components/ezGeyserHome'




function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route exact path="/login" component={Login}  />   
          <Route exact path="/register" component={Register}  />   
          <Route  path="/" component={Home}  />   


    
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
