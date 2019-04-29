import React, { Component } from 'react';

class DogSlider extends Component {
  handleChange = (event) => {
    this.props.onSliderChange(parseInt(event.target.value), 10);
  };
  render(){
    return (
      <label>
        <strong>Slide Me: </strong>
        <input type="range" min="0" max="100" step="1" 
          value={this.props.position}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default DogSlider;