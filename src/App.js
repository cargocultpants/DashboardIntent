import React, {Component} from 'react';
import './App.css'
import SVG from './SVG';
import Sidenav from './Sidenav';
import Header from './Header';

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
