import React, {Component} from 'react';
import TabsTarget from './TabsTarget'

class Tabs extends Component {
  render() {
    return (
      <div className='navTabs'>
        {navTabs.map((tab) => <TabsTarget key={tab.id} navTabs={navTabs} />)}
      </div>
    );
  }
}

export const navTabs = [{
  id: 'main',
  color: 'yellow',
}, {
  id: 'users',
  color: 'blue',
}, {
  id: 'content',
  color: 'green',
}]

export default Tabs;
