import React, { Component } from 'react';
import DogFooter from './DogFooter';
import DogSlider from './DogSlider';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      position: 0
    };
  }
  handleSliderChange = (position) => {
    this.setState({
      position: position
    });
  }
  render(){
    return (
      <>
      <main id="site-main">
        <DogSlider 
          position={this.state.position} 
          onSliderChange={this.handleSliderChange}
        />
        <h1>Hello World</h1>
      </main>
      <DogFooter position={this.state.position} />
      </>
    );
  }
}

export default App;