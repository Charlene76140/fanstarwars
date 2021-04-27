import './App.css';

import Header from './components/layout/header/Header';
import Nav from './components/layout/nav/Nav';
import Footer from './components/layout/footer/Footer';

// Imports spécifiques au router REACT router dom
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main>
        test main
      </main>
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
