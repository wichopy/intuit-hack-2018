import React, { Component } from 'react';
import './App.css';
import LandingPage from './Landing';
import Manager from './Manager';
import Scoreboard from './Scoreboard';
import Task from './Task'
import { Switch, Route, Link } from 'react-router-dom'

const fakeData = [
  {
    "id": 1,
    "name": "Jim Halpert",
    "phone": "16134002850",
    jobsPerMonth: 23,
    "points": 130,
    "avatar_url": "http://www.wetpaint.com/wp-content/uploads/2016/04/the-office-jim-cat-640x480-1461014255.jpg"
  },
  {
    "id": 2,
    "name": "Michael Scott",
    jobsPerMonth: 36,
    "points": 200,
    "avatar_url": "https://imgix.bustle.com/2017/4/27/c5576501-1a7a-43b8-b5e4-9f0aed1083e0.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70"
  },
  {
    "id": 3,
    "name": "Dwight Schrute",
    jobsPerMonth: 2,
    "points": 1000,
    "avatar_url": "https://am22.akamaized.net/tms/cnt/uploads/2012/01/dwightschrute-220x252.jpg"
  },
  {
    "id": 4,
    "name": "Pam Beesly",
    jobsPerMonth: 6,
    "points": 500,
    "avatar_url": "https://theofficeanalytics.files.wordpress.com/2017/09/pam-halpert-1.jpg?w=1024"
  },
  {
    "id": 5,
    "name": "Andy Bernard",
    jobsPerMonth: 40,
    "points": 20,
    "avatar_url": "https://i.imgur.com/Aq597h2.jpg?1"
  }
]

const Header = () => (
  <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between' }}>
    <div>
      <Link to="/">
        PERK
      </Link>
    </div>
    <div>
      <span style={{ marginRight: '40px' }}>
        <Link to="/scoreboard">
          Scoreboard
        </Link>
      </span>
      <Link to="/manager">
        Dirty Boi Cleaners
      </Link>
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/manager" component={Manager} />
          <Route path="/scoreboard" render={() => <Scoreboard employees={fakeData} />} />
          <Route path="/task/new" component={Task} />
          <Route render={() => {
            return <div>
              Not found
            </div>
          }} />
        </Switch>

      </div>
    );
  }
}

export default App;
