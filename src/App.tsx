import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { User } from './models/User';

import { Home } from './pages/Home';

const user = User.create({
  name: 'sean',
  isLoggedIn: true,
})

export const App = () => (
  <Router>
    <Route path='/' component={ Home } />
  </Router>
)