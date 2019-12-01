import React from 'react'; import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LandingPage } from 'components';
import { ChoosePizza } from 'containers';

import './App.scss';

const blockName = 'fake-store';

function App() {
  return (
    <Router>
      <div className={blockName}>
        <header className={`${blockName}__header`}>
          <Link to="/">Fake Pizza Place!</Link>
        </header>
        <Switch>
          <Route path="/choose">
            <ChoosePizza />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
