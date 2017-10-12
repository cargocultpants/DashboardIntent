import React, {Component} from 'react';

class Graph extends Component {
  render() {
    return (
      <div className="tabs-target is-active" id="main">
        <div className="row">
          <div className="col-desktop-12">
            <section className="o-pane--yellow">
              <header><span className="o-pane__dot"></span>
                <h2>Overview</h2>
              </header>
              <nav>
                <a className="is-active purchase">
                  Purchase
                  <br />
                  Intent
                </a>
                <a className="is-active favorability">
                  Brand
                  <br />
                  Favorability
                </a>
              </nav>
              <div className="o-pane__contents">
                <div className="row">
                  <div className="right">
                    <select>
                      <option>Today</option>
                      <option>Tomorrow</option>
                      <option>Someday</option>
                    </select>
                  </div>
                </div>
                <canvas id="overview-graph"></canvas>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
