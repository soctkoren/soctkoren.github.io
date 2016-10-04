import React from 'react';
import './App.css';
import './grid.css';
import Resume from './Components/Resume/Resume.js';

var App = React.createClass({
  render() {
    return (
      <div className="App">
      	<Resume />
      </div>
    );
  }
});

export default App;
