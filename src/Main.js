import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Users from './Users';
import Content from './Content';

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="o-menu">
            <ul className="o-menu__links">
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/content">Content</Link></li>
            </ul>
          </nav>

          <Route path="/users" component={Users}/>
          <Route path="/content" component={Content}/>
        </div>
      </Router>
    );
  }
}

export default Main;
