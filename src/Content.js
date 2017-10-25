import React, {Component} from 'react';
import Canvas from './Canvas';

class Content extends Component {
  render() {
    return (
      <div>
      <a className="o-menu__logo" href="/content">
        <h3>Content</h3>
      </a>
      <Canvas name="Shannon" />
      </div>
    );
  }
}

export default Content;
