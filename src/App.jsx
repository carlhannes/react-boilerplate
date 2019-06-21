import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from './pages/Index';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
