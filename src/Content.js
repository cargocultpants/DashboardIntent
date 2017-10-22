import React, {Component} from 'react';
import ContentView from './ContentView';

class Content extends Component {
  render() {
    return (
      <a className="o-menu__logo" href="/content">
        <h3>Content</h3>
        <ContentView />
      </a>
    );
  }
}

export default Content;
