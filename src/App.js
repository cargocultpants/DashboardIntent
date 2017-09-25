import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


function Sidebar(props) {
  const headings = props.headings;
  const listItems = headings.map(heading =>
    <a href={"#"+heading}>
      <li>
        {heading}
      </li>
    </a>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const headings  = ["Main", "Users", "Analytics", "Report"];

const Main = () => (
  <Sidebar headings={headings} />
)


const App = () => (
  <Router>
    <div>
      <Route path="/" component={Main}/>
    </div>
  </Router>
)
export default App
