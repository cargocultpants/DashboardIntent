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
            <a className="is-active" href="#main">Main</a>
          </li>
          <li>
            <a className="users" href="#users">Users</a>
          </li>
          <li>
            <a className="content" href="#content">Content</a>
          </li>
        </ul>
      </nav>
    </div>
    );
  }
}

export default Sidenav;
