import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import HeaderTabs from './components/HeaderTabs.js';
import Router from './components/Router.js';

function App() {
  return (
    <div className="App">
      <HeaderTabs />
    </div>
  );
}

export default App;
