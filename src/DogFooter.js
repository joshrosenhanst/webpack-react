import React, { Component } from 'react';
import dog from './assets/img/dog.png';

class App extends Component {
  render(){
    return (
      <footer>
        <img id="dog_footer" src={dog} alt="Transparent Dog footer"/>
      </footer>
    );
  }
}

export default App;