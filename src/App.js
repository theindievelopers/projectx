import React, { Component } from 'react';
import './App.css';
import ColorGame from './ColorGame';
//import InBetween from './InBetween';

class App extends Component {
  render() {
    return (
      <div className="App" style={{textAlign:'center'}}>
      	<h1>Enzo's Color Game</h1>
          <ColorGame/>
        <button className="btn btn-primary" onClick={() => window.location.reload(false)}>R O L L</button>
        {/*<InBetween />*/}
        <p>RED,BLUE,GREEN,PINK,ORANGE,YELLOW</p>
      </div>
    );
  }
}

export default App;
