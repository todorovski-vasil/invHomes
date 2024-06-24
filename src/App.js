import React from 'react';
import logo from './logo.svg';
import Header from './components/header/header'
import './App.css';
import PropertyList from './components/propertyList/propertyList';

function App() {
  return (
    <div className="App">
      <Header/>
      <PropertyList />
    </div>
  );
}

export default App;
