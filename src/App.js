import './App.css';

import Header from './components/layout/header/Header';
import Nav from './components/layout/nav/Nav';
import Footer from './components/layout/footer/Footer';
import Availableresource from './components/availableresource/Availableresource';
import Searchlist from './components/searchlist/Searchlist';


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Nav />
        <main className="container my-3 my-lg-5">
          <Switch>
            <Route path="/Availableresource">
              <Availableresource />
            </Route>
            <Route path="/Searchlist">
              <Searchlist />
            </Route>
            <Route path="/">
              <Availableresource />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
