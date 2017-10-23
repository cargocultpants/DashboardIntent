import React, {Component} from 'react';
import ContentView from './ContentView';

class Content extends Component {
  render() {
    return (
      <div>
      <a className="o-menu__logo" href="/content">
        <h3>Content</h3>
      </a>
      <ContentView />
      </div>
    );
  }
}

export default Content;
