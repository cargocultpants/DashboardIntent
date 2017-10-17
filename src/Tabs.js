import React from 'react';

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
              <h1>Headings must have content and the content must be accessible by a screen reader.</h1>
              <p></p>
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
}, {
  id: 'users',
  color: 'blue',
}, {
  id: 'content',
  color: 'green',
}];

export default Tabs;
