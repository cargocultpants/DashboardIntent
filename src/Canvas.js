import React, { Component } from 'react';

{/*class Canvas extends Component {
  constructor(props) {
    super(props);
    this.props.
  render() {
  }
}
  */}

// Create Canvas component to go in Content tab component
function Canvas(props) {
  return (
    <canvas
      id={props.name} width="400" height="400">
      Ugh, really? Your browser does not support the HTML5 canvas tag? You need to get it together.
    </canvas>
    );
  }

export default Canvas;
