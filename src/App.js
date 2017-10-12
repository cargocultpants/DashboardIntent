import React, {Component} from 'react';
import './App.css'
import SVG from './SVG';
import Sidenav from './Sidenav';
import Header from './Header';
import Graph from './Graph';
import Users from './Users';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div>
        <SVG />
          <div id="pagewrapper">
            <div className="container">
              <div className="row">
                <Sidenav />
                <div className="col-desktop-8">
                  <Header name="Blissy" initials="JB"/>
                  <Graph />
                  <Users />
                  <Content />

                            {/* TO-DO */}

                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App
