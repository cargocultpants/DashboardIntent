import React, {Component} from 'react';
import Chart from 'chart.js';
const myChart = new Chart(ctx, {...});

const ctx = "dashboard";





class Graph extends Component {
  render() {
    return (
      <canvas id="dashboard" width="400" height="400"></canvas>
    );
  }
}

export default Graph;
