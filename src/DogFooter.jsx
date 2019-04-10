import React, { Component } from 'react';
import dog from './assets/img/dog.png';

class App extends Component {
  render(){
    return (
      <footer>
        <img src={dog} alt="Transparent Dog footer image"/>
      </footer>
    );
  }
}

export default App;