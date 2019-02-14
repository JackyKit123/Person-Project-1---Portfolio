import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import 'reset-css'
import NoMatch from './404/App'
import About from './About/App'
import EUTrip from './Album/albums/EU-trip';
import Pet from './Album/albums/Pet';
import StarGaze from './Album/albums/StarGaze';
import USTrip from './Album/albums/US-trip';
import Album from './Album/App'
import Contact from './Contact/App';
import Hobbies from './Hobbies/App'
import Homepage from './Homepage/App'
import Project from './Project/App';
import './Pure-Css3-Animated-Border.css'

import './index.css'

export default class extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
            <Route exact={true} path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/hobbies" component={Hobbies} />
            <Route exact={true} path="/album" component={Album} />
            <Route path="/album/us-trip" component={USTrip} />
            <Route path="/album/eu-trip" component={EUTrip} />
            <Route path="/album/pet" component={Pet} />
            <Route path="/album/star-gazing" component={StarGaze} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Project} />
            <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}
