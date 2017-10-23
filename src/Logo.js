import React, {Component} from 'react';
import logo from './logo.png';

class Logo extends Component {
  render() {
    return (
      <a className="o-menu__logo" href="/#main">
        <img className="block" src={logo} alt="Content Intent Logo" />
      </a>
    );
  }
}

export default Logo;
