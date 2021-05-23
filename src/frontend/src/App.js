import './App.scss';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="app-name"><h1>IPL Dashboard</h1></div>
      <Router>
        <Switch>
          <Route path="/teams/:teamName/matches/:year">
            <MatchPage />
          </Route>
          <Route path="/teams/:teamName">
            <TeamPage />
          </Route>
        </Switch>
      </Router>
   
   
    </div>
  );
}

export default App;
