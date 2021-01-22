import React from 'react';
import { Route, Switch } from 'react-router-dom';
import JobDetailPage from './pages/JobDetailPage';
import StartPage from './pages/StartPage';
import './App.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/job/:id" component={JobDetailPage} />
        <Route path="/" component={StartPage} />
      </Switch>
    </div>
  );
}

export default App;
