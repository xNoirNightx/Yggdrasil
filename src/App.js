import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Yggdrasil from './Yggdrasil';
import Asgard from './Component/Asgard';
import Midgard from './Component/Midgard';
import Vanaheim from './Component/Vanaheim';
import Jotunheim from './Component/Jotunheim';
import Alfheim from './Component/Alfheim';
import Svartalfheim from './Component/Svartalfheim';
import Niflheim from './Component/Niflheim';
import Muspelheim from './Component/Muspelheim';
import Helheim from './Component/Helheim';
// import Button from './Button';

function App() {
  return (
    <Router>
      <Switch>
       <Route path="/src/Yggdrasil.js" exact component={Yggdrasil} />
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
