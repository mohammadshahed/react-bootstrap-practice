import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from './Components/User/User';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Contact from './Components/Contact/Contact';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <div>
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <a className="navbar-brand" href="/">React Bootstrap Practice</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse justify-content-center navbar-collapse ml-auto" id="navbarNavDropdown">
                          <ul className="navbar-nav d-block ml-auto d-flex pr-4">
                            <li className="nav-item"><Link className='nav-link' to='/'>Home</Link></li>
                            <li className="nav-item"><Link className='nav-link' to='/about'>About</Link></li>
                            <li className="nav-item"><Link className='nav-link' to='/service'>Service</Link></li>
                            <li className="nav-item"><Link className='nav-link' to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
              </nav>
            </div>
            
            

            <Switch>
              <Route exact path = "/">
                <User></User>
              </Route>
              <Route path = "/about">
                <About></About>
              </Route>
              <Route path = "/service">
                <Service></Service>
              </Route>
              <Route path = "/contact">
                <Contact></Contact>
              </Route>
              <Route path = "*">
                <NoMatch></NoMatch>
              </Route>
            </Switch>

            {/* <Route exact path ='/' component={App} />
            <Route path ='/about' component={About} />
            <Route path ='/service' component={Service} />
            <Route path ='/contract' component={Contract} /> */}

        </div>
    </Router>
  );
}

export default App;
