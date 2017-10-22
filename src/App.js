import React, {Component} from 'react';
import './App.css'
import SVG from './SVG';
import Sidenav from './Sidenav';
import Header from './Header';
import Tabs, {tabList} from './Tabs';

class App extends Component {
  render() {
    return (
      <div>
        <SVG />
          <div id="pagewrapper">
            <div className="container">
              <div className="row">
              <Header name="Blissy" initials="JB"/>
                <Sidenav />
                <div className="col-desktop-8">
                  <Tabs tabList={tabList}/>

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
