import React from 'react';
import './App.css';
import './grid.css';
import data from './resume.json';
import HeroContainer from './Components/Hero/HeroContainer.js';

var App = React.createClass({
  render() {
    return (
      <div className="App">
        <HeroContainer />
      </div>
    );
  }
});

export default App;
