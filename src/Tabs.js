import React from 'react';
import Main from './Main';
import Users from './Users';
import Content from './Content';

function Tabs(props) {
  const tablist = props.tabList.map(tab =>
    <div key={tab.id} className="tabs-target" id={tab.id}>
      <div className="row">
        <div className="col-desktop-12">
          <section className={"o-pane--" + tab.color}>
            <header><span className="o-pane__dot"></span>
              <h2 id="tabs-target-id">{tab.id}</h2>
            </header>
            <div className={"o-pane--" + tab.id}>
              {tab.component}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
  return(
    <div> {tablist} </div>
  );
}


export const tabList = [{
  id: 'main',
  color: 'yellow',
  component: <Main />
}, {
  id: 'users',
  color: 'blue',
  component: <Users />
}, {
  id: 'content',
  color: 'green',
  component: <Content />
}];

export default Tabs;
