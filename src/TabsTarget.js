import React, {Component} from 'react';

class TabsTarget extends Component {
  render() {
    return (
      <div className="tabs-target" id={this.props.navTabs.id}>
        <div className="row">
          <div className="col-desktop-12">
            <section className={"o-pane--" + this.props.navTabs.color}>
              <header><span className="o-pane__dot"></span>
                <h2 id="tabs-target-id">{this.props.navTabs.id}</h2>
              </header>
              <div className={"o-pane--" + this.props.navTabs.id}>
                <h1>Headings must have content and the content must be accessible by a screen reader.</h1>
                <p></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default TabsTarget;
