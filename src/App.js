import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Asgard from './Pages/Asgard';
import Midgard from './Pages/Midgard';
import Vanaheim from './Pages/Vanaheim';
import Jotunheim from './Pages/Jotunheim';
import Alfheim from './Pages/Alfheim';
import Svartalfheim from './Pages/Svartalfheim';
import Niflheim from './Pages/Niflheim';
import Muspelheim from './Pages/Muspelheim';
import Helheim from './Pages/Helheim';
// import Button from './Button';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/asgard" component={Asgard} />
        <Route path="/midgard" component={Midgard} />
        <Route path="/vanaheim" component={Vanaheim} />
        <Route path="/jotunheim" component={Jotunheim} />
        <Route path="/alfheim" component={Alfheim} />
        <Route path="/svartalfheim" component={Svartalfheim} />
        <Route path="/niflheim" component={Niflheim} />
        <Route path="/muspelheim" component={Muspelheim} />
        <Route path="/helheim" component={Helheim} />
      </Switch>
    </Router>
  );
}

export default App;
