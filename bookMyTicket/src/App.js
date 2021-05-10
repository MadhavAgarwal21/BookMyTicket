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

// Loader
import { CircularProgress } from '@material-ui/core'

import { AuthProvider, useAuth } from "./contexts/AuthContext"
import PrivateRoute from "./assets/PrivateRoutes"

function App() {

  // const { isInitialized } = useAuth()

  const [firebaseInitialized, setFirebaseInitialized] = useState(true)

  // useEffect(() => {
  //   isInitialized().then(val => {
  //     setFirebaseInitialized(val)
  //   })
  // })


  return firebaseInitialized == true ? (
    <>
      <Container fluid style={{ padding: '0px' }}>
        <Navigation />
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signUp" component={signUp} />
              <Route exact path="/details" component={Profile} />
              <Route exact path="/seat/:id" component={Seat} />
              <Route component={Home} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </Container>
    </>
  ) : (
    <div style={{ marginTop: "100px" }}>
      <CircularProgress />
    </div>
  )
}

export default App;