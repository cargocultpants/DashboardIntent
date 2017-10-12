import React, {Component} from 'react';
import './App.css'
import SVG from './SVG';
import Sidenav from './Sidenav';

class App extends Component {
  render() {
    return (
      <div>
        <SVG />
          <div id="pagewrapper">
            <div className="container">
              <div className="row">
              <Sidenav />

              {/* TO-DO */}

              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App
