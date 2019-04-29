import React, { Component } from 'react';
import dog from './assets/img/dog.png';

class DogFooter extends Component {
  getStyles = () => {
    let verticalPosition = (this.props.position ? -(this.props.position) : 0);
    let rotation = (this.props.position ? (1.8 * this.props.position) : 0);
    return {
      transform:  `translateY(${verticalPosition}%) rotate(${rotation}deg)`
    };
  }
  render(){
    return (
      <footer>
        <img id="dog_footer" src={dog} alt="Transparent Dog footer"
          style={this.getStyles()}
        />
      </footer>
    );
  }
}

export default DogFooter;