import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
