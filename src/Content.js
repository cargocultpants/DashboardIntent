import React, {Component} from 'react';

class Content extends Component {
  render() {
    return (
      <div className="tabs-target" id="content">
        <div className="row">
          <div className="col-desktop-12">
            <section className="o-pane--green match-heights">
              <header><span className="o-pane__dot"></span>
                <h2>Content</h2>
              </header>
              <div className="o-pane__contents">
                <h1></h1>
                <p></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
