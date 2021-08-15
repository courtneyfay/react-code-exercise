import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Search from './views/Search';
import DetailedResult from './views/DetailedResult';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <DetailedResult />
        </Route>
        <Route exact path="/">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
