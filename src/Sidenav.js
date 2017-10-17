import React, {Component} from 'react';
import Logo from './Logo';

class Sidenav extends Component {
  render() {
    return (
      <div className="col-desktop-3">
        <nav className="o-menu">
        <Logo />
        <ul className="o-menu__links">
          <li>
            <a href="#main">Main</a>
          </li>
          <li>
            <a href="#users">Users</a>
          </li>
          <li>
            <a href="#content">Content</a>
          </li>
        </ul>
        </nav>
    </div>
    );
  }
}

export default Sidenav;
