//REACT
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

//PAGES
import Login from './screens/Login';
import signUp from './screens/signUp';
import Profile from './screens/details';
import Home from './screens/home';
import Seat from './screens/seat';

//CSS
import './App.css';
// import { Home } from '@material-ui/icons';

//assets
import Navigation from './assets/navbar';

import { useSelector } from 'react-redux';

function App() {

  return (
    <>
      <Container fluid style={{ padding: '0px' }}>
        <Navigation />
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signUp" component={signUp} />
            <Route exact path="/details" component={Profile} />
            <Route exact path="/seat/:id" component={Seat} />
            <Route component={Home} />
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App;