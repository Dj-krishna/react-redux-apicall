import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
