import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import ShowDetailsPage from './pages/ShowDetailsPage'

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul className="nav-menu">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            {/* <li>
              <Link to="/1">Page 1</Link>
            </li> */}
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/tv/:showID" component={ShowDetailsPage}></Route>
        <Route exact path="/2" component={Page2}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
