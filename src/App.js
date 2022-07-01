import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Components/Create';
import PersonDetails from './Components/PersonDetails';
import NotFound from './Components/NotFound';



function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create"> 
          <Create />
        </Route>
        <Route path="/persons/:id">
          <PersonDetails /> 
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
