import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useState } from 'react';
import Search from './views/Search';
import DetailedResult from './views/DetailedResult';
import { ResultType } from './types/ResultType';

function App() {
  const [detail, setDetail] = useState<ResultType>();

  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <DetailedResult detail={detail} />
        </Route>
        <Route exact path="/">
          <Search setDetail={setDetail} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;