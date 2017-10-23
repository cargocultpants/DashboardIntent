import React, { Component } from 'react';
import data from './data';
import RC2 from 'react-chartjs2';

class Graph extends Component {
  render() {
    return (
      <RC2 data={data} type='bar' />
    );
  }
}

export default Graph;
