import React, {Component} from 'react';

function removeActive() {
  const isActive = document.querySelectorAll('.is-active');
  isActive.forEach(element => element.classList.toggle('is-active');
}

class ActiveTab extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {className: ""};
  }

  handleClick(e) {
    this.setState({ className: removeActive() });
  }

  render() {
    return (
      <li>
        <a onClick={this.handleClick} className="main" href="#main">Main</a>
      </li>
      <li>
        <a className="users" href="#users">Users</a>
      </li>
      <li>
        <a className="content" href="#content">Content</a>
      </li>
    );
  }
}

export default ActiveTab;
