import React, {Component} from 'react';

class Users extends Component {
  render() {
    return (
      <div className="tabs-target" id="users">
        <div className="row">
          <div className="col-desktop-12">
            <section className="o-pane--blue match-heights">
              <header><span className="o-pane__dot"></span>
                <h2>Users</h2>
              </header>
              <div className="o-pane__contents">
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

export default Users;
